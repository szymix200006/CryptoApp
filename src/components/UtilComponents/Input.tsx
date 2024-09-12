import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error: string | undefined;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({type, name, error, ...props}, ref) => {
    return (
      <div className="input-container">
        <label className="input-label" htmlFor={name}>{name ? name.charAt(0).toUpperCase() + name.slice(1) : ""}: </label>
        <input className="input-input" type={type} name={name} ref={ref} {...props}/>
        <span className="input-error">{error}</span>
      </div>
    )
  }
);

