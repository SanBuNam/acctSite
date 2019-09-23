import React, { Fragment } from "react"
import Styles from "./text-button.module.scss"

const Button = props => {
  return (
    <Fragment>
      <button className={Styles.btnText}>
        <a>{props.text}</a>
      </button>
    </Fragment>
  )
}

export default Button
