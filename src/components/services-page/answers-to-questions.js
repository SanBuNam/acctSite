import React from "react"
import styles from "./answers-to-questions.module.scss"

const Container = () => {
  return (
    <div className={styles.container}>
      <h4>How, why, when and what?</h4>
      <h3>Answers to your questions</h3>
      <div className={styles.leftContainer}>
        <div>
          <h5>How does payment work?</h5>
          <p>
            The time and cost of a project is estimated upfront. To secure my
            availability I ask for a deposit of 30%. The rest is invoiced in two
            instalments during the project. For large projects I am happy to
            provide flexible payment options.
          </p>
          <br />
          <span>Learn what an estimate is and how payments work</span>
        </div>
        <div>
          <h5>How does payment work?</h5>
          <p>
            The time and cost of a project is estimated upfront. To secure my
            availability I ask for a deposit of 30%. The rest is invoiced in two
            instalments during the project. For large projects I am happy to
            provide flexible payment options.
          </p>
          <br />
          <span>Learn what an estimate is and how payments work</span>
        </div>
        <div>
          <h5>How does payment work?</h5>
          <p>
            The time and cost of a project is estimated upfront. To secure my
            availability I ask for a deposit of 30%. The rest is invoiced in two
            instalments during the project. For large projects I am happy to
            provide flexible payment options.
          </p>
          <br />
          <span>Learn what an estimate is and how payments work</span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <img />
          <div>
            <h5>Questions?</h5>
            <p>
              There is a treasure trove of answers just for you. Head over to
              the frequently asked web development questions to find some
              answers.
            </p>
          </div>
        </div>
        <div>
          <img />
          <div>
            <h5>Questions?</h5>
            <p>
              There is a treasure trove of answers just for you. Head over to
              the frequently asked web development questions to find some
              answers.
            </p>
          </div>
        </div>
        <div>
          <img />
          <div>
            <h5>Questions?</h5>
            <p>
              There is a treasure trove of answers just for you. Head over to
              the frequently asked web development questions to find some
              answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Container
