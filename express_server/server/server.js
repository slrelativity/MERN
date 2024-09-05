import express from "express";
const app = express();
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );


const users = [
	{ firstName: "Reimu", lastName: "Hakurei", id: 12344524 },
	{ firstName: "Marisa", lastName: "Kirisame", id: 2342345 },
	{ firstName: "Sanae", lastName: "Kochiya", id: 3453345 },
	{ firstName: "Sakuya", lastName: "Izayoi", id: 456456 },
	{ firstName: "Momiji", lastName: "Inubashiri", id: 35345 },
];   

//ROUTING
//READ ALL
// app.get("/api/hello", (req, res) =>{
    // res.json({message: "hello", status: "cool", isAdmin: false})
app.get("/api/users", (req, res) =>{
    res.json(users);
})


app.post("/api/users", (req, res) => {
	// req.body will contain the form data from Postman or from React later
	console.log(req.body);
	// we can push it into the users array for now...
	// later on this will be inserted into a database using a database method
	users.push(req.body);
	// the updated users array
	res.json(users);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`SERVER is up on port: ${port} and is listening for REQuests to RESpond to`) );


