import { React, useEffect, useState } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
	Select,
	MenuItem,
} from "@material-ui/core";
import {signUpFormSchema}   from '../schemas/signUpFormSchema'
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import * as Yup from 'yup'






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
		email: "",
		userType: "",
		password: "",
		confirmpassword: "",
	});
	//holds error state
	const [errors, setErrors]=useState({username: "", email: "", userType: "", password: "", confirmpassword: ""})

	//
	const[disabled, setDisabled] = useState(true);

	//
	const setFormErrors = (name, value)=>{
		Yup.reach(signUpFormSchema, name).validate(value)
		.then(()=> setErrors({...errors, [name]:''}))
		.catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
	}

	// updates state with form's data
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormErrors(name, value)
		setSignup((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//
	const handleSubmit = (e) =>{
		e.preventDefault();
		axiosWithAuth()
			.post('/users', signUp)
			.then( res =>{
				console.log(res.data)
				localStorage.setItem('token', JSON.stringify(res.data))
				props.history.push('/home');
			})
			.catch( err => console.log(err))

	}

// disables submit button until form is valid
	useEffect(()=>{
		signUpFormSchema.isValid(signUp).then(valid =>{
			setDisabled(!valid)
		})
	}, [signUp])
	return (
		
		<Grid>
			<form onSubmit={handleSubmit}>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Sign Up</h2>
				</Grid>
				<div style={{color: '#ff0000'}}>
					<div>{errors.username}</div>
					<div>{errors.email}</div>
					<div>{errors.password}</div>
					<div>{errors.confirmpassword}</div>
				</div>
				<TextField
					id="username"
					name="username"
					value={signUp.username}
					onChange={handleChange}
					label="Username"
					fullWidth
					required
				/>
				
				<TextField
					id="email"
					name="email"
					value={signUp.email}
					onChange={handleChange}
					email
					label="Email"
					fullWidth
					required
				/>

				<TextField
					id="userType"
					name="userType"
					value={signUp.userType.value}
					label="User Type"
					onChange={handleChange}
					select
					fullWidth
					required
				>
					
					<MenuItem value={"borrower"}>Borrower</MenuItem>
					<MenuItem value={"lender"}>Lender</MenuItem>
				</TextField>
				
				<TextField
					id="password"
					name="password"
					value={signUp.password}
					onChange={handleChange}
					label="Password"
					type="password"
					fullWidth
					required
				/>
			
				<TextField
					id="confirmpassword"
					name="confirmpassword"
					value={signUp.confirmpassword}
					onChange={handleChange}
					label="Confirm Password"
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
					disabled={disabled}
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
			</form>
		</Grid>
	);
};

export default Signup;
