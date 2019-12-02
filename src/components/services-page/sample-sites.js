import React from "react"
import styles from "./sample-sites.module.scss"
import ecommerceImg from "../../../content/images/ecommerc.jpg"
import auto from "../../../content/images/auto.jpg"
import healthcare from "../../../content/images/health.jpg"

const Statement = () => {
  const imgSrc = [
    {
      src: ecommerceImg,
      name: "Agriculture",
      desc: "Farmers and other companies within the agricultural supply chain",
      href: "https://www.google.com/",
    },
    {
      src: auto,
      name: "Auto",
      desc: "Auto manufacturers and connected car technology companies",
      href: "https://www.google.com/",
    },
    {
      src: ecommerceImg,
      name: "Finance",
      desc: "Banks, financial services firms and blockchain companies",
      href: "https://www.google.com/",
    },
    {
      src: healthcare,
      name: "Healthcare",
      desc:
        "Hospitals, pharmacies, and all companies within the healthcare system",
      href: "https://www.google.com/",
    },
    {
      src: ecommerceImg,
      name: "Insurance",
      desc: "Insurance brokers and digital insurance agencies",
      href: "https://www.google.com/",
    },
    {
      src: ecommerceImg,
      name: "Media",
      desc:
        "Video, audio, and print media companies defining future media experiences",
      href: "https://www.google.com/",
    },
    {
      src: ecommerceImg,
      name: "Retail",
      desc: "Retail and eCommerce companies who aim to compete with Amazon",
      href: "https://www.google.com/",
    },
    {
      src: ecommerceImg,
      name: "Travel",
      desc:
        "OTAs, hotels, airlines, car rental companies and all other travel related organizations",
      href: "https://www.google.com/",
    },
    {
      src: ecommerceImg,
      name: "Utilities",
      desc:
        "Power, water and gas utilites that need help streamlining operations",
      href: "https://www.google.com/",
    },
  ]

  return (
    <div className={styles.container}>
      <h2>Industries References</h2>
      <div className={styles.innerContainer}>
        {imgSrc.map(serviceImg => (
          <a target="blank" href={serviceImg.href}>
            <div
              className={styles.innerDiv}
              style={{
                height: "300px",
                width: "300px",
                background: `linear-gradient(
                rgba(242, 242, 242, .5),
                rgba(242, 242, 242, .5)
              ), url("${serviceImg.src}") 50% 50% no-repeat`,
                backgroundSize: "cover",
                transition: "all 0.15s ease-in-out",
              }}
            >
              <h5>{serviceImg.name}</h5>
              <p>{serviceImg.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Statement
