import React from "react"
import Styles from "../components/button.module.scss"

const button = props => {
  return <button className={Styles.container}>{props.text}</button>
}

export default button
