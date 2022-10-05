import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  password: Yup.string()
    .required("kindly enter a new password")
    .min(8, "Password must be at least 8 char long"),
  confirmPassword: Yup.string()
    .required("kindly confirm your new password")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

const confirmPasswordFormOptions = { resolver: yupResolver(formSchema) };

export default confirmPasswordFormOptions;
