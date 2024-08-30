import { useState } from "react";

const Reactive = (label,...props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = { fname, lname, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

return(

    <form onSubmit={ createUser }>
    <div>
        <label>First Name: </label> 
        <input value={fname} type="text" placeholder="Please enter first name" onChange={ (e) => setFname(e.target.value) }/>
        {
            fname.length < 2 &&
            <p>First name needs to be more than 2 characters</p>
        }
    </div>
    <div>
        <label>Last Name: </label> 
        <input value={lname} type="text" placeholder="Please enter last name" onChange={ (e) => setLname(e.target.value) }/>
        {
            lname.length < 2 &&
            <p>Last name needs to be more than 2 characters</p>
        }
    </div>
    <div>
        <label>Email Address: </label> 
        <input value={email} type="text" placeholder="Please enter email address" onChange={ (e) => setEmail(e.target.value) }/>
        {
            email.length < 8 &&
            <p>Email needs to be more than 8 characters</p>
        }
    </div>
    <div>
        <label>Password: </label>
        <input value={password} type="password" placeholder="Please enter password" onChange={ (e) => setPassword(e.target.value) }/>
        {
            password.length < 8 &&
            <p>Password needs to be more than 8 characters</p>
        }
    </div>
    <div>
        <label>Confirm Password: </label>
        <input value={confirmPassword} type="password" placeholder="Please enter confirm password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
        {
            confirmPassword.length < 8 &&
            <p>Confirm Password needs to be more than 8 characters</p>
        }
    </div>
</form>
    );
};

export default Reactive

