import React from "react"
import Styles from "../components/composition.module.scss"
import nat from "../../content/images/nat-1.jpg"

const composition = () => {
  return (
    <div className={Styles.composition}>
      <img
        className={Styles.photos}
        className={Styles.photoOne}
        alt="Photo 1"
        src={nat}
      />

      <img
        className={Styles.photos}
        className={Styles.photoTwo}
        alt="Photo 2"
        src={nat}
      />

      <img
        className={Styles.photos}
        className={Styles.photoThree}
        alt="Photo 3"
        src={nat}
      />
    </div>
  )
}

export default composition
