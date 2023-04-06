import React, { useEffect, useState } from "react";
import Clock from "./clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid d-flex vh-100">
      <div className="row justify-content-between mx-auto align-self-center gap-2">
        <div className="text-center">
          <button className="btn btn-warning shadow p-3 mb-5 rounded">
            SHOW
          </button>
        </div>
        <div className="col bg-dark text-white text-center px-3 fs-1 rounded">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <Clock time={Math.floor(timer / 100000) % 10} />
        <Clock time={Math.floor(timer / 10000) % 10} />
        <Clock time={Math.floor(timer / 1000) % 10} />
        <Clock time={Math.floor(timer / 100) % 10} />
        <Clock time={Math.floor(timer / 10) % 10} />
        <Clock time={Math.floor(timer) % 10} />
		<div className="text-center gx-2">
          <button className ="btn btn-sucess shadow p-3 rounded m-5">
            PLAY
          </button>
		  <button className="btn btn-info shadow p-3 rounded m-5">
            RESTART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
