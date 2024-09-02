import { useState } from "react";

// The MessageForm component should look like the following:
const MessageForm = (props) => {
	const [message, setMessage] = useState("");
    const [box, setBox] = useState("");

    function Box(props) {
  const { width, height, backgroundColor, children } = props;


	const handleSubmit = (e) => {
		e.preventDefault();
		props.onNewMessage(message);
		setMessage("");

        const box = {
					width: width,
					height: height,
					backgroundColor: backgroundColor,
				};

       

	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Set Message</h1>
			<div>
				style={box}>{children}{" "}
			</div>

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
