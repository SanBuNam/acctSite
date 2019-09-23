import React, { Fragment } from "react"

const smallBorderBottom = props => {
  return (
    <Fragment>
      <p
        style={{
          color: `${props.color}`,
          borderBottom: `solid 1px ${props.bottomLine}`,
        }}
      >
        {props.text}
      </p>
    </Fragment>
  )
}

export default smallBorderBottom
