import { Watch } from "react-loader-spinner"

export default function Loading() {
  return (
    <div className="loading-box-container">
      <Watch visible={true}
        height="80"
        width="80"
        radius="48"
        color="rgb(197, 19, 197)"
        ariaLabel="watch-loading"
    />
    </div>
  )
}
