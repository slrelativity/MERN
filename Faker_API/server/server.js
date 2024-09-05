import express from "express";
import {faker} from "@faker-js/faker"
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());


const createUser = () =>{
    const newUser = {
			firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
			password: faker.internet.password(),
			email: faker.internet.email(),
			number: faker.phone.number(),
			id: faker.string.uuid(),
		};
        return newUser
    };


const createCompany = () =>{
    const newCompany = {
			name: faker.company.name(),
            address: faker.location.streetAddress(),
			id: faker.string.uuid(),
        };
        return newCompany
    };


app.get("/api/user/new", (req, res) => {
    const getNewUser = createUser()
    res.json(getNewUser);
});


app.get("/api/companies/new", (req, res) => {
    const getNewCompany = createCompany()
	res.json(getNewCompany);
});


app.get("/api/user/company", (req, res) =>{
    const getNewUser = createUser()
    const getNewCompany = createCompany()
    const results ={
    user: getNewUser,
    company: getNewCompany};
    res.json(results);
    });


// this needs to be below the other code blocks
app.listen(port, () =>
	console.log(
		`SERVER is up on port: ${port} and is listening for REQuests to RESpond to`
	)
);
