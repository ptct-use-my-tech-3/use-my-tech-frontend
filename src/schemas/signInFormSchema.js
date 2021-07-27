import * as Yup from 'yup';


export  const signInFormSchema = Yup.object().shape({
    email: Yup
		.string()
		.email("Must be a valid email address.")
		.required("Must include email address."),
    password: Yup
		.string()
		.required("Password is Required")
		.min(6, "Passwords must be at least 6 characters long."),
});

// username: Yup
    //     // .string()
	// 	// .required("Must include a username")
    // 	// .min(4,"Username must be at least 4 characters long."),
    
// userType: Yup
    //     .string()
    //     .required()

    
    // .oneOf([Yup.ref('password')],'Confirm Password: Passwords must match')