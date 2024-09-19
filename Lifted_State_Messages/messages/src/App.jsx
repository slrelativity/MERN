import { useState } from "react";
import MessageDisplay from "../components/MessageDisplay.jsx";
import MessageForm from "../components/MessageForm.jsx";
import "./App.css";

// This is a funtion to call and set the current message
function App() {
	const [currentMessage, setCurrentMessage] = useState("There are no messages");


	const onNewMessage = (newMessage) => {
	setCurrentMessage = (newMessage);
	};



	return (
		<>
			<MessageForm onNewMessage={onNewMessage} />
			<MessageDisplay currentMessage={currentMessage} />
		</>
	);
};

export default App;
