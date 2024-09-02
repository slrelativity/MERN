import { useState } from "react";
import MessageForm from "../components/MessageForm";
import MessageDisplay from "../components/MessageDisplay";
import "./App.css";

// This is a funtion to call and set the current message
function App() {
	const [currentMessage, setCurrentMessage] = useState("There are no messages");
    const [currentBox, setCurrentBox] = useState("");

	const onNewMessage = (newMessage) => {
		setCurrentMessage(newMessage);
        
	const onNewBox = (newBox) => {
		setCurrentBox(newBox);


	};



	return (
		<>
			<MessageForm onNewMessage={onNewMessage} />
            <MessageForm onNewBox={onNewBox} />
			<MessageDisplay currentMessage={currentMessage} />
		</>
	);
}

export default App;
