
const PersonCard = (props) => {
	const { firstName, lastName, attributes} = props;
	const { age, hairColor } = attributes;



return(
        <div style={{ textAlign:"left"}}>
            <h1>{lastName} {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    ) 
};

export default PersonCard;