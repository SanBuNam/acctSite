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
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="service">
              What services are you interested in? <br />
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
            <label htmlFor="customer">
              What is your name?* <br />
              <input
                id="customer"
                name="customer"
                type="text"
                value={this.state.customer}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <br />
            <label htmlFor="call">
              <input
                id="call"
                name="call"
                type="checkbox"
                value={this.state.moreDetails}
                onChange={this.handleInputChange}
              />{" "}
              Please Call me back to discuss this in more detail
            </label>
            <br />
            <br />
            <label htmlFor="detailed">
              <input
                id="detailed"
                name="detailed"
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
            <Button text="Send enquiry" type="submit" value="Send Inquiry" />
          </form>
        </div>

        <ContactInfo />
      </div>
    )
  }
}

export default ContactForm
