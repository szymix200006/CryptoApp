import { ErrorProps } from "../lib/types";

export default function ErrorPage({error}: ErrorProps) {
  return (
    <div className="error-page">
      <h1 className="error-page-header">{error.name}</h1>
      <span className="error-page-info">{error.message}</span>
    </div>
  )
}
