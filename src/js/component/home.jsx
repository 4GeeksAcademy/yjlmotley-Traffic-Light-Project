import React, { useState, useEffect } from "react";


export function Home()  {
	const [ selectedColor, setSelectedColor ] = useState("null");
	const [ showPurple, setShowPurple ] = useState(false);
	const [ cycleActive, setCycleActive ] = useState(false);

	const togglePurple = () => {
        setShowPurple(!showPurple);
    };

	const cycleTrafficColors = () => {
		if (cycleActive) {
			if (selectedColor === "green") {
				setSelectedColor("yellow");
			} else if (selectedColor === "yellow") {
				setSelectedColor("red");
			} else if (selectedColor === "red") {
				setSelectedColor("green");
			}
		}
	};	

	useEffect(() => {
        const intervalId = setInterval(cycleTrafficColors, 1800);

        return () => clearInterval(intervalId);
    }, [selectedColor]); 

	const handleStartStopCycle = () => {
		setCycleActive (!cycleActive);
		if (!cycleActive) {
			setSelectedColor("green");
		}
	};


	return (
		<div>
			<span className="buttonGroup">
				<button id="cycleButton" className="btn btn-dark" onClick={handleStartStopCycle}>
					{cycleActive ? "Stop Traffic Light Cycle" : "Start Traffic Light Cycle"}
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