import { React, useState } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";
import axios from "axios";

const Signup = (props) => {
	// sets styling of paper background
	const paperStyle = {
		padding: 20,
		height: "70vh",
		width: 380,
		margin: "60px auto",
	};

	// sets style of button
	const btnstyle = { margin: "20px 0" };

	// holds state to sign up
	const [signUp, setSignup] = useState({
		username: "",
		password: "",
		confirmpassword: "",
	});

	// TODO: add form validation
	// TODO: disable button until form is valid

	// updates state with form's data
	const handleChange = (e) => {
		const { id, value } = e.target;
		setSignup((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	// sends info to backend to add new user
	const signup = (e) => {
		axios
			// TODO: add API link to sign-up in .post
			.post("", {
				username: signUp.username,
				password: signUp.password,
			})
			.then((res) => {
				console.log(res);
				// sets local storage to login
				localStorage.setItem("user", JSON.stringify(res.data));
				// "/home" will be used when user is logged instead of just "/"
				props.history.push("/home");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Sign Up</h2>
				</Grid>
				<TextField
					id="username"
					value={signUp.username}
					onChange={handleChange}
					label="Username"
					placeholder="Enter username"
					fullWidth
					required
				/>
				<TextField
					id="password"
					value={signUp.password}
					onChange={handleChange}
					label="Password"
					placeholder="Enter password"
					type="password"
					fullWidth
					required
				/>
				<TextField
					id="confirmpassword"
					value={signUp.confirmpassword}
					onChange={handleChange}
					label="ConfirmPassword"
					placeholder="Confirm password"
					type="password"
					fullWidth
					required
				/>
				<Button
					type="submit"
					color="secondary"
					variant="contained"
					style={btnstyle}
					fullWidth
					onClick={signup}
				>
					Sign up
				</Button>

				<Typography>
					{" "}
					Already have an account?
					<Link style={{ marginLeft: "10px" }} href="/login">
						Log In
					</Link>
				</Typography>
			</Paper>
		</Grid>
	);
};

export default Signup;
