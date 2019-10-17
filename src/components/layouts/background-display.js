import React from "react"

const BackgroundDisplay = props => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.src})`,
        height: "350px",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  )
}

export default BackgroundDisplay
