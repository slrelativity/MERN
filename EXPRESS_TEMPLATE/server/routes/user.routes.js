import express from "express";
// here, we require the suffix .js to get the routes
import router from "./routes/user.routes.js";
import UserController from "./controllers/user.controller.js";


const app = express();
const port = 8000;




app.use(express.json());



// All routes with the /users path
router.route("/users")
    .get((req, res) => {
        res.send("Hello World");
    })
    .post((req, res) => {
        res.send("POST request");
    });



// All routes with the /users/:id path
router.route("/users/:id")
    .get((req, res) => {
        res.send("GET request");
    })
    .put((req, res) => {
        res.send("PUT request");
    })
    .delete((req, res) => {
        res.send("DELETE request");
    });
export default router;




app.use("/api", router);




app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
