//create a folder with project name...no spaces
//create another folder inside of the newly create project folder called "server"
//create a file inside of the 'server' folder called 'server.js'

//go to the terminal cd into the 'server' folder and run the following:
// 'npm init -y' and press enter
// 'npm i express' and press enter
// 'npm --save-dev nodemon' and press enter

//go to the 'package.json' file in vscode and add ,'type':'module' between the last 2 curly brackets
//go to the 'package.json' file in vscode and add ,"dev": "npx nodemon" as the last entry in 'scripts'

//go to the terminal and type 'npm run dev'






//default import, app and port required for every server
import express from "express";
const app = express();
const port = 8000;


// REQUIRED make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );


//function to get user data
app.get("/api/users", (req, res) => {
	res.json(users);
});



//function to post user data
app.post("/api/users", (req, res) => {
	// req.body will contain the form data from Postman or from React later
	console.log(req.body);
	// we can push it into the users array for now...
	// later on this will be inserted into a database using a database method
	users.push(req.body);
	// the updated users array
	res.json(users);
});




// REQUIRED this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );



