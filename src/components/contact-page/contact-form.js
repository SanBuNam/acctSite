import React, { Component } from "react"
import styles from "./contact-form.module.scss"
import ContactInfo from "./contact-info"
import Button from "../buttons/round-button"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      service: "",
      customer: "",
      moreDetails: true,
      email: "",
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
    return (
      <div className={styles.container}>
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
              <br />
              <select
                id="serivce"
                name="service"
                value={this.state.service}
                onChange={this.handleInputChange}
              >
                <option selected value="">
                  Select One
                </option>
                <option value="Quick Site">Quick Site</option>
                <option value="Standard Website">Standard Website</option>
                <option value="Complete Web-Suite">Complete Web-Suite</option>
              </select>
            </label>
            <br />
            <br />
            <label htmlFor="name">
              What is your name?* <br />
              <input
                id="name"
                name="name"
                type="text"
                value={this.state.customer}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <br />
            <label htmlFor="number">
              <input
                id="number"
                name="number"
                type="checkbox"
                value={this.state.moreDetails}
                onChange={this.handleInputChange}
              />{" "}
              Please Call me back to discuss this in more detail
            </label>
            <br />
            <br />
            <label htmlFor="memo">
              <input
                id="memo"
                name="memo"
                type="checkbox"
                value={this.state.moreDetails}
                onChange={this.handleInputChange}
              />{" "}
              I‘m happy to provide more detailed info now
            </label>
            <br />
            <br />
            <label htmlFor="email">
              Email* : <br />
              <input
                id="email"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <div class="field">
              <div data-netlify-recaptcha="true"></div>
            </div>
            <Button text="Send enquiry" type="submit" value="Send Inquiry" />
          </form>
        </div>

        <ContactInfo />
      </div>
    )
  }
}

export default ContactForm
