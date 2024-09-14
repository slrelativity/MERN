//

const UserController = {
	getAllUsers: (req, res) => {
		res.send("GET Request");
	},
	createUser: (req, res) => {
		res.send("POST Request");
	},
};



export default UserController;

