import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Survey = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const sendSurvey = (e) =>{
        e.preventDefault();
        //do something with the data gathered
        navigate("/results");
    }



return(
    <form onSubmit={sendSurvey}>
        <label>Your Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <label>Your Comment:</label>
        <textarea onChange={ (e) =>setComment(e.target.value) } value={comment}></textarea>
        <input type="submit" value ="Submit Survey"></input>
    </form>

);
};

export default Survey;