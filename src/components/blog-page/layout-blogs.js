import React from "react"
import { Link } from "gatsby"
import Styles from "./layout-blogs.module.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/blogs`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: "4rem",
            marginBottom: "6rem",
            fontSize: "3rem",
            fontFamily: "Brevia",
            textAlign: "center",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blogs/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: "4rem",
            marginBottom: "6rem",
            fontSize: "3rem",
            fontFamily: "Brevia",
            textAlign: "left",
            lineHeight: ".9",
            color: "#0c1d41",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blogs/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <header>{header}</header>
          <main>{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
