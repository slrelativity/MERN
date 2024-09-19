import { useState } from "react";

const MessageForm = (props) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onNewMessage( message );
		setMessage("");

	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>Set Message</h1>
			<textarea
				rows="4"
				cols="50"
				placeholder="Enter your message here"
				onChange={(e) => setMessage(e.target.value)}
				value={message}
			></textarea>
			<input type="submit" value="Send Message" />
		</form>
	);
};

export default MessageForm;
