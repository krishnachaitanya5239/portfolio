import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import SocialMediaSection from '../SocialMediaSection'
import AboutSection from '../AboutSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here

class Portfolio extends Component {
  state = {activeNav: navBarItems[0].name}

  renderComponent = () => {
    const {activeNav} = this.state

    switch (activeNav) {
      case navBarItems[1].name:
        return <AboutSection />
      case navBarItems[2].name:
        return <ProjectsSection />
      case navBarItems[3].name:
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  changeActiveNavbarItem = activeNavbarItem => {
    this.setState({activeNav: activeNavbarItem})
  }

  render() {
    return (
      <div className="main-container">
        <NavBar
          changeActiveNavbarItem={this.changeActiveNavbarItem}
          navBarItems={navBarItems}
        />
        <div className="body-section">
          <div className="active-section">{this.renderComponent()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
