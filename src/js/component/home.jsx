import React, { useState } from "react";


//create your first component
const Home = () => {
	let [activeLigth, setActiveLigth] = useState("")
	let handleLigth = (color) => {
		setActiveLigth (color)
	}
	return (
		<div  className="container m-auto d-flex aling-items-center flex-column">
			<div className="mx-auto bg-dark" style={{width:'25px', height:'100px'}}>|</div>
			<div className="semaphore bg-dark" style={{margin: '0 auto'}}>
				<div className={`ligth bg-danger ${activeLigth === "red" ? "active": ""}`} onClick= {()=> handleLigth("red")} ></div>
				<div className={`ligth bg-warning ${activeLigth === "yellow" ? "active": ""}`} onClick= {()=> handleLigth("yellow")}></div>
				<div className={`ligth bg-success ${activeLigth === "green" ? "active": ""}`} onClick= {()=> handleLigth("green")}></div>
			</div>
			
		</div>
	);
};

export default Home;
