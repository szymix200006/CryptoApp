import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string,
};

export default function Button({text, ...props}: ButtonProps) {
  return (
    <button {...props}>{text}</button>
  )
}
