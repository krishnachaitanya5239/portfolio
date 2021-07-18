// Write your code here
import {Component} from 'react'
import './index.css'

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-section">
        <h1 className="vertical-spacing">My Contact</h1>
        <img
          className="location-image"
          alt="location"
          src="https://assets.ccbp.in/frontend/react-js/location-img.png"
        />
        <p className="vertical-spacing">
          If you like my projects and interested to do work with me. Please
          contact...
        </p>
        <h1 className="vertical-spacing">Please Contact</h1>
        <p className="vertical-spacing">9123456789</p>
        <p className="vertical-spacing">sophie.millers@gmail.com</p>
      </div>
    )
  }
}

export default ContactSection
