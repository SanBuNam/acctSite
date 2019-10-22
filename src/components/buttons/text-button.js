import React, { Fragment } from "react"
import Styles from "./text-button.module.scss"

const Button = props => {
  return (
    <Fragment>
      <button className={Styles.btnText}>
        <p>{props.text}</p>
      </button>
    </Fragment>
  )
}

export default Button
