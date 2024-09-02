import { useState } from "react";

//Use State for inputs
const Reactive = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	//Variables for input error messages
	const [fnameError, setFnameError] = useState("");
	const [lnameError, setLnameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	//Reactive Form validation for First Name critera
	const validateFname = (value) => {
		if (value.length < 3) {
			setFnameError("First name needs to be more than 2 characters");
		} else {
			setFnameError("");
		}
	};
	//Reactive Form validation for Last Name critera
	const validateLname = (value) => {
		if (value.length < 3) {
			setLnameError("Last name needs to be more than 2 characters");
		} else {
			setLnameError("");
		}
	};
	//Reactive Form validation for Email Address critera
	const validateEmail = (value) => {
		if (value.length < 9) {
			setEmailError("Email needs to be more than 8 characters");
		} else {
			setEmailError("");
		}
	};
	//Reactive Form validation for Password critera
	const validatePassword = (value) => {
		if (value.length < 9) {
			setPasswordError("Password needs to be more than 8 characters");
		} else {
			setPasswordError("");
		}
	};

	//Reactive Form validation to Confirm Password
	const validateConfirmPassword = (value) => {
		if (value !== password) {
			setConfirmPasswordError("Passwords do not match");
		} else {
			setConfirmPasswordError("");
		}
	};

	//Handlers
	const handleFnameChange = (e) => {
		const value = e.target.value;
		setFname(value);
		validateFname(value);
	};

	const handleLnameChange = (e) => {
		const value = e.target.value;
		setLname(value);
		validateLname(value);
	};

	const handleEmailChange = (e) => {
		const value = e.target.value;
		setEmail(value);
		validateEmail(value);
	};

	const handlePasswordChange = (e) => {
		const value = e.target.value;
		setPassword(value);
		validatePassword(value);
		validateConfirmPassword(confirmPassword);
	};

	const handleConfirmPasswordChange = (e) => {
		const value = e.target.value;
		setConfirmPassword(value);
		validateConfirmPassword(value);
	};

	//Reactive Form Inputs
	return (
		<form>
			<div>
				<label>First Name: </label>
				<input
					value={fname}
					type="text"
					placeholder="Please enter first name"
					onChange={handleFnameChange}
				/>
				{fnameError ? <p>{fnameError}</p> : ""}
			</div>
			<div>
				<label>Last Name: </label>
				<input
					value={lname}
					type="text"
					placeholder="Please enter last name"
					onChange={handleLnameChange}
				/>
				{lnameError ? <p>{lnameError}</p> : " "}
			</div>
			<div>
				<label>Email Address: </label>
				<input
					value={email}
					type="email"
					name="email"
					placeholder="Please enter email address"
					onChange={handleEmailChange}
				/>
				{emailError ? <p>{emailError}</p> : ""}
			</div>
			<div>
				<label>Password: </label>
				<input
					value={password}
					type="password"
					placeholder="Please enter password"
					onChange={handlePasswordChange}
				/>
				{passwordError ? <p>{passwordError}</p> : " "}
			</div>
			<div>
				<label>Confirm Password: </label>

				<input
					value={confirmPassword}
					type="password"
					placeholder="Please enter confirm password"
					onChange={handleConfirmPasswordChange}
				/>
				{confirmPasswordError ? <p>{confirmPasswordError}</p> : " "}
			</div>
		</form>
	);
};

export default Reactive;
