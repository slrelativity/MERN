import express from "express";
import {faker} from "@faker-js/faker"
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());

//function to create a new user
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

//function to create a new company from the Faker API
const createCompany = () =>{
    const newCompany = {
			name: faker.company.name(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            sate: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.zipCode(),
			id: faker.string.uuid(),
        };
        return newCompany
    };

//function to get a newly created user from the Faker API
app.get("/api/user/new", (req, res) => {
    const getNewUser = createUser()
    res.json(getNewUser);
});

//function to get a newly created company from the Faker API
app.get("/api/companies/new", (req, res) => {
    const getNewCompany = createCompany()
	res.json(getNewCompany);
});

//function to get a newly created user and new created company from the Faker API
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
