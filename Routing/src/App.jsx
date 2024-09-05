import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Survey from "./views/Survey";



function App() {
	return (
		<BrowserRouter>
			<h1>Routing Example</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/survey" element={<Survey />} />
				<Route path="/results" element={<Home />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
