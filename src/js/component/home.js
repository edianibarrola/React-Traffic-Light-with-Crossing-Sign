import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, SetColor] = useState("red");

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="cableHorizontal">
				<div className="streetSign">Edian Ave</div>
			</div>
			<div className="cableHang"></div>
			<div className="lightFrame">
				<div
					className={
						color === "red" ? "light red selected" : "light red"
					}
					onClick={() => SetColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "light yellow selected"
							: "light yellow"
					}
					onClick={() => SetColor("yellow")}></div>
				<div
					className={
						color === "green"
							? "light green selected"
							: "light green"
					}
					onClick={() => SetColor("green")}></div>
			</div>
			<div className="crossSign">
				<i
					className={
						color === "red"
							? "fas fa-walking"
							: color === "green"
							? "fas fa-hand-paper"
							: " "
					}
				/>
				{/* <i className="fas fa-walking" />
				<i className="fas fa-hand-paper" /> */}
			</div>
		</div>
	);
}
