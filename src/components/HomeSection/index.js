// Write your code here
import './index.css'
import {Component} from 'react'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="vertical-space">Sophie Millers</h1>
        <h1 className="vertical-space">Full Stack Developer</h1>
        <p className="vertical-space">
          Experienced in MongoD, Express, ReactJS and Node.js, Bootstrap, HTML,
          CSS, SQL and Python
        </p>
        <button className="vertical-space button" type="button">
          View Resume
        </button>
      </div>
    )
  }
}

export default HomeSection
