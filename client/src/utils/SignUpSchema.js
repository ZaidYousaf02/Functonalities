import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your First Name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your Last Name"),
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(8).required("Please enter your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});
