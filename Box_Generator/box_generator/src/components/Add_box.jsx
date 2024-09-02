import React from "react";

const Add_box = ({ boxes}) => {
	return (
		<div>
			{boxes.map((box) => (
				<div
					key={box.id}
					style={{
						width: "75px",
						height: "75px",
						backgroundColor: box.color,
						margin: "10px",
						display: "inline-block",
					}}
				>
				</div>
			))}
		</div>
	);
};

export default Add_box;
