import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../UtilComponents/Input";
import { NavLink } from "react-router-dom";
import Button from "../UtilComponents/Button";

type FormFields = {
  email: string;
  password: string
}

export default function LoginForm() {
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
      console.log(data)
  }
    
  return (
    <form className="login-form-container" onSubmit={handleSubmit(onSubmit)}>
      <span className="login-form-text">Welcome back 👋</span>
      <Input {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i,
          message: "Invalid email"
        }
      })} type="text" error={errors.email?.message}/>
      <Input {...register("password", {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must contain at least 8 characters"
        }
      })} type="password" error={errors.password?.message}/>
      <NavLink to="" className="login-form-outer-link">Forgot password?</NavLink>
      <Button className="login-form-button" type="submit" disabled={isSubmitting} text="Login"/>
      <NavLink to="../signin" className="login-form-outer-link">New here?</NavLink>
    </form>
  )

}
