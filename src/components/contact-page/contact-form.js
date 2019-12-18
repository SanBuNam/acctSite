import React, { Component } from "react"
import styles from "./contact-form.module.scss"
import ContactInfo from "./contact-info"
import { Collapse } from "react-collapse"

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      service: "",
      fullname: "",
      phone: "",
      email: "",
      time: "",
      textarea: "",
      isOpened: false,
      isOpened2: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
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
      fullname,
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
              name="Contact Form"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              action="/"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label htmlFor="service">
                  What services are you interested in?
                </label>
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
              </div>
              <br />
              <div>
                <label htmlFor="fullname">What is your name?*</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder={"First and last name"}
                  value={fullname}
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div>
                <input
                  id="phoneCollapsive"
                  name="phoneCollapsive"
                  type="checkbox"
                  checked={isOpened}
                  onChange={({ target: { checked } }) =>
                    this.setState({ isOpened: checked })
                  }
                />
                <label htmlFor="phoneCollapsive">
                  Please call me back to discuss this in more detail
                </label>
              </div>
              <br />
              <Collapse isOpened={isOpened}>
                <label htmlFor="phone">
                  What is the best phone number to call you on?
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder={"Your contact number"}
                  value={phone}
                  onChange={this.handleInputChange}
                />
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
              <input
                id="phoneCollapsive2"
                name="phoneCollapsive2"
                type="checkbox"
                checked={isOpened2}
                onChange={({ target: { checked } }) =>
                  this.setState({ isOpened2: checked })
                }
              />
              <label htmlFor="phoneCollapsive2">
                I'm happy to provide more detailed info now
              </label>
              <Collapse isOpened={isOpened2}>
                <p style={{ fontSize: "1.4rem" }}>
                  Thank you. This will help me better assess how I can work with
                  you. The information here is optional so feel free to provide
                  as much as you can and have time for.
                </p>
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
              <label htmlFor="email">Email* :</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={"Email"}
                value={email}
                onChange={this.handleInputChange}
              />
              <br />
              <div data-netlify-recaptcha="true"></div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <ContactInfo />
        </div>
      </div>
    )
  }
}

export default ContactForm
