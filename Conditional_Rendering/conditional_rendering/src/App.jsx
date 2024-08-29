import { useState } from "react";
import "./App.css";

function App() {
	const [stylePicker, setStylePicker] = useState("");

	const styleHander = (style) => {
		switch (style.length) {
			case 0:
				return "lightmode";
			case 1:
				return "darkmode";
			case 2:
				return "redmode";
			case 3:
				return "bluemode";
			case 4:
				return "yellowmode";
		}
	};

	return (
		<div className={styleHander(stylePicker)}>
			<h1>Watch me change</h1>
			<input type="text" onChange={(e) => setStylePicker(e.target.value)} />
		</div>
	);
}

export default App;
