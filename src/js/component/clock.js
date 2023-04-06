import React from "react";


const Clock = ({time}) => {
	return (
		<div className="col bg-dark text-white text-center px-3 fs-1 rounded">
            {time}
        </div>
	
	);
};
export default Clock;