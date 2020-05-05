import React from "react"
import Styles from "./round-Button.module.scss"

const Button = props => {
  return <button className={Styles.button}>{props.text}</button>
}

export default Button
