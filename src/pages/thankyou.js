import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/site-layout"
import styled from "styled-components"
import laughing from "../../content/images/laughing.jpeg"

const ThankyouPage = styled.div`
  margin: 0 auto;
  padding: 2rem;
  justify-self: center;
  text-align: center;
  div {
    display: inline-block;
  }
  h2 {
    line-height: 1;
  }
  ol {
    margin-top: 2rem;
    text-align: left;
    li {
      line-height: 1.5;
    }
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: white;
  }
  a:hover,
  a:active {
    color: orange;
  }
  img {
    width: 25rem;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`

const Thankyou = () => {
  return (
    <Layout>
      <ThankyouPage>
        <div>
          <h2>
            Thank you for contacting me. I look forward to speak with you soon.
          </h2>
          <h2>What would you like to do now?</h2>
          <ol>
            <li>
              <Link to="/">Go back to main page</Link>
            </li>
            <li>
              <Link to="/blogs/">
                Would like to learn how to help your business with website?
              </Link>
            </li>
            <li>
              <Link to="/process/">
                Read about process for building website with me?
              </Link>
            </li>
          </ol>
          <img alt="laughing-man" src={laughing} />
        </div>
      </ThankyouPage>
    </Layout>
  )
}

export default Thankyou
