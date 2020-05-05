import React from "react"
import styles from "./industry-reference.module.scss"
import bigHouse from "../../../content/images/big-house320x320.jpg"
import auto from "../../../content/images/auto.jpg"
import healthcare from "../../../content/images/healthcare320x320.jpg"
import travel from "../../../content/images/travel320x320.jpg"
import finance from "../../../content/images/finance320x320.jpg"
import media from "../../../content/images/communication320x320.jpg"
import retail from "../../../content/images/shoping-carts320x320.jpg"
import doctor from "../../../content/images/doctor400x400.jpg"

const Statement = () => {
  const imgSrc = [
    {
      src: auto,
      name: "Manufacturing",
      desc: "Auto manufacturers and connected car technology companies",
      href: "https://bench.co/",
    },
    {
      src: finance,
      name: "Finance",
      desc: "Banks, financial services firms and blockchain companies",
      href: "https://www.dgvolo.com/",
    },
    {
      src: healthcare,
      name: "Healthcare",
      desc:
        "Hospitals, pharmacies, and all companies within the healthcare system",
      href: "https://www.humana.com/individual-and-family/",
    },
    {
      src: bigHouse,
      name: "Insurance",
      desc: "Insurance brokers and digital insurance agencies",
      href: "https://www.policygenius.com/",
    },
    {
      src: media,
      name: "Social Media",
      desc:
        "Video, audio, and print media companies defining future media experiences",
      href: "https://www.lwb.org.au/foster-care/",
    },
    {
      src: retail,
      name: "Retail",
      desc: "Retail and eCommerce companies who aim to compete with Amazon",
      href: "https://www.prideofthemeadows.com/",
    },
    {
      src: travel,
      name: "Travel",
      desc:
        "OTAs, hotels, airlines, car rental companies and all other travel related organizations",
      href: "https://www.deliveroo.design/",
    },
    {
      src: doctor,
      name: "Profesional Office",
      desc:
        "Doctors, consultants and freelancers that need help with marketing on internet",
      href: "https://www.kirstennoelle.com/",
    },
  ]

  return (
    <div className={styles.container}>
      <h2>Industries References</h2>
      <div className={styles.innerContainer}>
        {imgSrc.map(serviceImg => (
          <a target="blank" href={serviceImg.href}>
            <div className={styles.inner}>
              <div className={styles.layer}>
                <h5>{serviceImg.name}</h5>
                <p>{serviceImg.desc}</p>
              </div>
              <div
                className={styles.innerDiv}
                style={{
                  minHeight: "320px",
                  width: "100%",
                  background: `linear-gradient(
                rgba(242, 242, 242, .3),
                rgba(242, 242, 242, .3)
              ), url("${serviceImg.src}") 50% 50% no-repeat`,
                  backgroundSize: "cover",
                  transition: "all 0.5s ease-in-out",
                }}
              ></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Statement
