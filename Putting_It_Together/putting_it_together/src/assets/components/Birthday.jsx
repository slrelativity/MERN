import { useState } from "react";
const Birthday = (props) =>{

    const {fname, lname, age, hair_color} = props;
    const [ageCount, setAge] = useState(age)
    return(
    
        <div className="birthday">
        <h1>{lname}, {fname}</h1>
        <p> Age: {ageCount}</p>
        <p> Hair Color: {hair_color}</p>
        <button onClick={() => setAge(ageCount +1)}>Birthday</button>
        </div>

    )
}

        export default Birthday;