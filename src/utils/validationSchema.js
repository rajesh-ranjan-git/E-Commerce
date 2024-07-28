import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("Oops! This doesn't seem to be and email..."),
  password: Yup.string()
    .required()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a lowercase letter"),
});

const signupSchema = Yup.object().shape({
  userName: Yup.string(),
  email: Yup.string()
    .required()
    .email("Oops! This doesn't seem to be and email..."),
  password: Yup.string()
    .required()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a lowercase letter"),
  confirmPassword: Yup.string()
    .label("Confirm Password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export { loginSchema, signupSchema };
