import React from "react"
import { Link } from "gatsby"

const Somomponent = () => {
  return (
    <>
      <Link
        to="/modal-menu/"
        state={{
          modal: true,
          noScroll: false,
        }}
      >
        modal menu
      </Link>
    </>
  )
}

export default Somomponent
