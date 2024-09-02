const MessageDisplay = (props) => {
	const { currentMessage } = props;
	return (
        //Displaying the current message
		<>
			<h1>Current Message</h1>
			<p>{ currentMessage } </p>
            
		</>
	);
};

export default MessageDisplay;
