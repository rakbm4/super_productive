import AuthCard from "../../../../components/auth/AuthCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In",
};

const SignIn = () => {
  return <AuthCard signInCard />;
};

export default SignIn;
