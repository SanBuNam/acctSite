import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import LoyaltyIcon from "@material-ui/icons/Loyalty"
import MailIcon from "@material-ui/icons/Mail"
import styles from "./toggle-menu.module.scss"
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
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/`}
          >
            <HomeIcon /> Home
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/about/`}
          >
            <InfoIcon /> About Me
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/process/`}
          >
            <PlaylistPlayIcon /> Approach
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/pricing/`}
          >
            <MonetizationOnIcon /> Pricing
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/contact/`}
          >
            <MailIcon /> Contact
          </Link>
        </ListItem>
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
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/service-types/website-design/`}
          >
            <LoyaltyIcon /> Website Develop
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/service-types/content-management/`}
          >
            <LoyaltyIcon /> Content Management
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/service-types/search-engine-optimization/`}
          >
            <LoyaltyIcon /> Search Engine Optimization
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              textDecoration: "none",
              color: "#0c1d41",
              fontSize: "1.3rem",
              textIndent: "5px",
              fontWeight: "600",
            }}
            to={`/service-types/website-hosting/`}
          >
            <LoyaltyIcon /> Website Hosting
          </Link>
        </ListItem>
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
