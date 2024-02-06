import React, { useState } from "react";


export function Home()  {
	const [ selectedColor, setSelectedColor ] = useState("red");
	const [ showPurple, setShowPurple ] = useState(true);

	const togglePurple = () => {
        setShowPurple(!showPurple);
    };

	return (
		<div>
			<span className="purpleButton">
				<button id="cycleButton" className="btn btn-dark" onClick={togglePurple}>
					{showPurple ? "Hide Purple Circle1" : "Show Purple Circle1"}
				</button>
				<button id="purpleButton" className="btn btn-dark" onClick={togglePurple}>
					{showPurple ? "Hide Purple Circle" : "Show Purple Circle"}
				</button>
			</span>
			<div className="traffic-light-container">
			<div className="traffic-light-top"></div>
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")} 
					className={"light red" + ((selectedColor === "red") ? " glow" : "")}>
				</div>
				<div 
					onClick={() => setSelectedColor("yellow")} 
					className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}>
				</div>
				<div 
					onClick={() => setSelectedColor("green")} 			
					className={"light green" + ((selectedColor === "green") ? " glow" : "")}>	
				</div>
				{showPurple && (
                    <div
                        onClick={() => setSelectedColor("purple")}
                        className={"light purple" + ((selectedColor === "purple") ? " glow" : "")}
                    ></div>
                )}
			</div>
			</div>
		</div>
	);
};

export default Home;