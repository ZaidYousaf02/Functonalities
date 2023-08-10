import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(8).required("Please enter your Password"),
});
