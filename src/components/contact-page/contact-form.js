import React, { Component } from "react"
import styles from "./contact-form.module.scss"
import ContactInfo from "./contact-info"
import Button from "../buttons/round-button"
import { Collapse } from "react-collapse"
import Styled from "styled-components"

const StyledP = Styled.p`
  font-size: 1.4rem;
`

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      service: "",
      name: "",
      phone: "",
      email: "",
      time: "",
      textarea: "",
      isOpened: false,
      isOpened2: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    const {
      isOpened,
      isOpened2,
      service,
      name,
      time,
      email,
      phone,
      textarea,
    } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.formDiv}>
            <form
              onSubmit={this.handleSubmit}
              action="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="service">
                What services are you interested in?
                <select
                  id="serivce"
                  name="service"
                  value={service}
                  onChange={this.handleInputChange}
                >
                  <option selected value="">
                    Please selecct ...
                  </option>
                  <option value="quickWebsite">Quick Site</option>
                  <option value="standardWebsite">Standard Website</option>
                  <option value="completeWebsite">Complete Web-Suite</option>
                </select>
              </label>
              <br />
              <label htmlFor="name">
                What is your name?*
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={"First and last name"}
                  value={name}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <label htmlFor="phoneCollapsive">
                <input
                  id="phoneCollapsive"
                  name="phoneCollapsive"
                  type="checkbox"
                  checked={isOpened}
                  onChange={({ target: { checked } }) =>
                    this.setState({ isOpened: checked })
                  }
                />
                Please call me back to discuss this in more detail
              </label>
              <br />
              <Collapse isOpened={isOpened}>
                <br />
                <label htmlFor="phone">
                  What is the best phone number to call you on?
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder={"Your contact number"}
                    value={phone}
                    onChange={this.handleInputChange}
                  />
                </label>
                <br />
                <label htmlFor="time">
                  What is the best time to call you?
                  <input
                    id="time"
                    name="time"
                    type="text"
                    placeholder={"For example this friday at 2pm"}
                    value={time}
                    onChange={this.handleInputChange}
                  />
                </label>
              </Collapse>
              <br />
              <label htmlFor="phoneCollapsive2">
                <input
                  id="phoneCollapsive2"
                  name="phoneCollapsive2"
                  type="checkbox"
                  checked={isOpened2}
                  onChange={({ target: { checked } }) =>
                    this.setState({ isOpened2: checked })
                  }
                />
                I'm happy to provide more detailed info now
              </label>
              <Collapse isOpened={isOpened2}>
                <StyledP>
                  Thank you. This will help me better assess how I can work with
                  you. The information here is optional so feel free to provide
                  as much as you can and have time for.
                </StyledP>
                <textarea
                  className={styles.textarea}
                  placeholder={
                    "Please outline your requirements here. This can include more specific details."
                  }
                  cols={100}
                  rows={7}
                  name="textarea"
                  value={textarea}
                  onChange={this.handleInputChange}
                />
              </Collapse>
              <br />
              <label htmlFor="email">
                Email* :
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder={"Email"}
                  value={email}
                  onChange={this.handleInputChange}
                />
              </label>
              <div className="field">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <br />
              <Button text="Send enquiry" type="submit" value="Send Inquiry" />
            </form>
          </div>
          <ContactInfo />
        </div>
      </div>
    )
  }
}

export default ContactForm
