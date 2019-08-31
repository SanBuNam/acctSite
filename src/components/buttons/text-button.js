import React from "react"
import Styles from "./text-button.module.scss"

const Button = props => {
  return <button className={Styles.btnText}>{props.text}</button>
}

export default Button
