import { useState } from  'react';
    
const UserForm = (props) => {
        //create all state variables for controlled input
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        
        // create a javascript object to hold all of the values
        const newUser = { username, email, password};
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");

    };
    

return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input value={username} type="text" onChange={ (e) => setUsername(e.target.value) }/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input value={email} type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input value={password} type="text" onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
