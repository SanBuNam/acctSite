import React from "react"

const BackgroundDisplay = props => {
  return (
    <div
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.src})`,
        height: "35rem",
        backgroundPosition: "top",
        textAlign: "center",
        color: "orange",
        backgroundColor: "offWhite",
      }}
    >
      {props.children}
    </div>
  )
}

export default BackgroundDisplay
