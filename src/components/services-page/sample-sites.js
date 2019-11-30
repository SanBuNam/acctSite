import React from "react"
import styles from "./sample-sites.module.scss"
import ecommerceImg from "../../../content/images/Ecommerce.png"
import Gatsbyjs from "../../../content/images/Gatsbyjs.jpg"

const Statement = props => {
  const imgSrc = [
    { src: ecommerceImg, name: "E-Commerce", href: "https://www.google.com/" },
    { src: Gatsbyjs, name: "Real Estate", href: "https://www.google.com/" },
    { src: ecommerceImg, name: "Insurance", href: "https://www.google.com/" },
    { src: Gatsbyjs, name: "Construction", href: "https://www.google.com/" },
    { src: ecommerceImg, name: "Restaurent", href: "https://www.google.com/" },
    { src: Gatsbyjs, name: "Retail", href: "https://www.google.com/" },
    {
      src: ecommerceImg,
      name: "Freelancers",
      href: "https://www.google.com/",
    },
    { src: ecommerceImg, name: "Restaurent", href: "https://www.google.com/" },
    { src: Gatsbyjs, name: "Retail", href: "https://www.google.com/" },
    {
      src: ecommerceImg,
      name: "Proffesionals",
      href: "https://www.google.com/",
    },
  ]

  return (
    <div className={styles.container}>
      <h2>Industries References</h2>
      <div className={styles.innerContainer}>
        {imgSrc.map(serviceImg => (
          <div
            style={{ backgroundImage: `url(${serviceImg.src}` }}
            className={styles.innerDiv}
          >
            <a target="blank" href={serviceImg.href}>
              <p>{serviceImg.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statement
