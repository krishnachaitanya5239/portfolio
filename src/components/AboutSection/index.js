import {Component} from 'react'
import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

// Write your code here

class AboutSection extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
        <p className="about-para">
          I started my journey in the world of computers from a young age, now
          Im 21 years old, pursuing my Computer Science majors at Santa Clara
          University, USA,. Web development is my center of interest
        </p>
        <div className="about-education-skills-container">
          <div className="education-container">
            <h1>Education</h1>
            <ul>
              {educationData.map(eachEducationData => (
                <li className="about-li">
                  <div className="row-container">
                    <img
                      className="about-image "
                      alt="bullet"
                      src="https://assets.ccbp.in/frontend/react-js/list-icon-img.png"
                    />
                    <h1 className="education-heading">
                      {eachEducationData.qualification}
                    </h1>
                  </div>
                  <p className="education-para">
                    {eachEducationData.qualificationSource}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-container">
            <h1 className="skills-heading">Skills</h1>

            <ul className="skills-ul">
              {skillsData.map(eachSkill => (
                <li className="skills-li" key={eachSkill.id}>
                  {eachSkill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
