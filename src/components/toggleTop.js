import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import styles from "./toggleTop.module.scss"
import { Link } from "gatsby"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    bottom: false,
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List
        style={{
          marginTop: "5rem",
        }}
      >
        <p
          style={{
            textDecoration: "none",
            color: "#ff9800",
            fontSize: "1.4rem",
            marginLeft: "1.5rem",
            fontStyle: "italic",
            marginBottom: "0",
            marginTop: "0",
            fontWeight: "600",
          }}
        >
          Main pages
        </p>
        {["home", "about", "blogs", "pricing", "contact"].map((text, index) => (
          <ListItem button key={text}>
            <Link
              style={{
                textDecoration: "none",
                color: "#0c1d41",
                fontSize: "1.2rem",
                textIndent: "5px",
              }}
              key={text}
              to={`/${text}/`}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <p
        style={{
          textDecoration: "none",
          color: "#ff9800",
          fontSize: "1.4rem",
          marginLeft: "1.5rem",
          fontStyle: "italic",
          marginBottom: "0",
          fontWeight: "600",
        }}
      >
        Service types
      </p>
      <List>
        {[
          "website-design",
          "content-management",
          "graphic-design",
          "search-engine-optimization",
          "website-hosting",
          "website-review-critique",
          "website-update",
        ].map((text, index) => (
          <ListItem button key={text}>
            <Link
              style={{
                textDecoration: "none",
                color: "#0c1d41",
                fontSize: "1.3rem",
                textIndent: "5px",
              }}
              key={text}
              to={`/service-types/${text}/`}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={toggleDrawer("right", true)}>
        Menu
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  )
}
