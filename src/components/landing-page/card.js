import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./card.scss"

const Card = () => {
  return (
    <div class="card">
      <div class="card__side card__side--front">
        <div class="card__picture card__picture--1">&nbsp;</div>
        <h4 class="card__heading">
          <span class="card__heading--span card__heading--span--1">
            The Sea Explore
          </span>
        </h4>
        <div class="card__details">
          <ul>
            <li>3 Day tour</li>
            <li>Up to 30 people</li>
          </ul>
        </div>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__cta">
          <p class="card__price-only">Only</p>
          <p class="card__price-value">$297</p>
          <a href="#popup" class="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
