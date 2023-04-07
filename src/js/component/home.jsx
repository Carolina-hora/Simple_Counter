import React, { useEffect, useState } from "react";
import Clock from "./clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);
  const [play, setPlay] = useState(true);
  const [hide, setHide] = useState (false);
  const [countDown, setCountDown] = useState(false);
  const [targetTime, setTargetTime] = useState(null);

  useEffect(() => {
    let interval;
    if (play) {
      interval = setInterval(() => {
        setTimer((timer) => (countDown ? timer - 1 : timer + 1));
      }, 1000);
    }
    if (timer === targetTime) {
      alert(`Your time of ${targetTime} seconds has been reached!`);
    }
    return () => clearInterval(interval);
  }, [play, countDown, targetTime, timer]);
  
  const togglePlay = () => {
    setPlay(!play);
  };

  const toggleHide = () => {
    setHide(!hide)
  }
  
  const toggleCountDown = () => {
    setCountDown((countDown) => !countDown);
  };

  const handleStartNumberChange = (event) => {
    setTargetTime(parseInt(event.target.value));
  };

  return (
    <div className="container-fluid d-flex vh-100">
      <div className="row justify-content-between mx-auto align-self-center gap-2">
        <div className="text-center">
          <button className="btn btn-warning shadow p-3 mb-5 rounded text-white" onClick={toggleHide}>
            {hide ? "HIDE" : "SHOW"}
          </button>
        </div>
        <div className="col bg-dark text-white text-center px-2 fs-1 rounded">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <Clock time={Math.floor(timer / 100000) % 10} />
            <Clock time={Math.floor(timer / 10000) % 10} />
            <Clock time={Math.floor(timer / 1000) % 10} />
            <Clock time={Math.floor(timer / 100) % 10} />
            <Clock time={Math.floor(timer / 10) % 10} />
            <Clock time={Math.floor(timer) % 10} />
        {hide && (
          <>
            <div className="text-center gx-2">
              <button
                className={`btn btn-${play ? "danger" : "success"} shadow text-white p-3 rounded m-1 mt-5`}
                onClick={togglePlay}
              >
                {play ? "PAUSE" : "PLAY"}
              </button>
              <button
                className="btn btn-info shadow text-white p-3 rounded m-1 mt-5"
                onClick={() => setTimer(0)}
              >
                RESTART
              </button>
              <button
                className="btn btn-primary shadow p-3 text-white rounded m-1 mt-5"
                onClick={toggleCountDown}
              >
                {countDown ? "COUNT UP" : "COUNT DOWN"}
              </button>
              <input
                id="startNumberInput"
                type="number"
                min="1"
                max="999999"
                onChange={handleStartNumberChange}
                className="form-control form-control-lg text-center fs-5 mt-5"
                placeholder="Alert me when this number is reached!"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

/* <>
<button className ={`btn btn-${play ? "danger" : "success"} shadow p-3 rounded m-2 mt-5`} onClick={togglePlay}>
  {play ? "PAUSE" : "PLAY"}
</button>
<button className="btn btn-info shadow p-3 rounded m-2 mt-5" onClick={() => setTimer(0)}>
  RESTART
</button>
</> : null} */