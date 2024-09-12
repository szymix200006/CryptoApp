import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import LoginHeader from "../components/LoginForm/LoginHeader";
import SignInForm from "../components/LoginForm/SignInForm";

export default function Login() {
  const {pathname} = useLocation();

  
  return (
    <div className="login-container">
      <LoginHeader />
      { pathname === '/login' ? <LoginForm /> : <SignInForm/> }
    </div>
  )
}
