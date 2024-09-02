import React from "react";

const Add_color = ({ addBox, boxColor, handleColorChange }) => {
	return (
		<div>
			<label>Color </label>
			<input
				type="text"
				value={boxColor}
				onChange={handleColorChange}
			/>
			<button onClick={addBox}> Add Box </button>
		</div>
	);
};

export default Add_color;
