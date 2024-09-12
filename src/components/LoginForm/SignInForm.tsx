import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../UtilComponents/Input";
import Button from "../UtilComponents/Button";

type FormFields = {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export default function SignInForm() {
    const {register, handleSubmit, getValues, formState: {errors, isSubmitting}} = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }

  return (
    <form className="signin-form-container" onSubmit={handleSubmit(onSubmit)}>
        <span className="login-form-text">Sign In ✅</span>
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
                message: "Password must contain at least 8 characters."
            }
        })} type="password" error={errors.password?.message}/>
        <Input {...register("passwordConfirmation", {
            required: "You need to confirm your password",
            validate: (value) => value === getValues().password
                || "Passwords must be the same"
            
        })} type="password" error={errors.passwordConfirmation?.message}/>
        <Button className="login-form-button" type="submit" disabled={isSubmitting} text="Sign In"/>
    </form>
  )
  
}
