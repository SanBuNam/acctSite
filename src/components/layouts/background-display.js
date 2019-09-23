import React from "react"

const BackgroundDisplay = props => {
  return (
    <div
      style={{
        backgroundSize: "100 % auto",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.src})`,
        height: "350px",
      }}
    >
      {props.children}
    </div>
  )
}

export default BackgroundDisplay
