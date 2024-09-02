import { useState } from "react";
import Add_color from "./components/Add_color"; 
import Add_box from "./components/Add_box";
import "./App.css";


function App() {
	const [boxes, setBoxes] = useState([]);

	const [boxColor, setBoxColor] = useState("");

	const addBox = () => {
		if (boxColor) {
			const newBox = {
				color: boxColor,
			};
			setBoxes((prevBoxes) => [...prevBoxes, newBox]);
			setBoxColor("");//Clearing box color
		}
	};
//This would be a funtion to input the color
	const handleColorChange = (e) => {
		setBoxColor(e.target.value);
	};

	return (
		<>
			<h3>Box Generator</h3>
			<Add_color
				addBox={addBox}
				boxColor={boxColor}
				handleColorChange={handleColorChange}
			/>
			<Add_box boxes={boxes} />
		</>
	);
}

export default App;
