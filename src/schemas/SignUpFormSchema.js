import * as Yup from 'yup';


export  const signUpFormSchema = Yup.object().shape({
    username: Yup
    .string()
		.required("Must include a username")
		.min(4,"Username must be at least 4 characters long."),
    email: Yup
		.string()
		.email("Must be a valid email address.")
		.required("Must include email address."),
    password: Yup
		.string()
		.required("Password is Required")
		.min(6, "Passwords must be at least 6 characters long."),
	confirmpassword: Yup
		.string()
		.required("Must re-enter password")
		// .oneOf([Yup.ref('password')],'Confirm Password: Passwords must match')
});