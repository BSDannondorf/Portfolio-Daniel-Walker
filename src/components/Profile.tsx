import './Navi.css'
import IMG from '../assets/IMG_3776.jpg'
// import githubIcon from '../assets/githunlink.png'
// import linkedinIcon from '../assets/linkedin.png'

function Profile() {
  return (
    <div>
        <section id="profile">
            <div className="section__pic-container">
                <img src={IMG} alt="Daniel Walker profile picture" />
            </div>
    <div className="section__text">
      {/* <p className="section__text__p1">Hello, I'm</p> */}
      <h1 className="title !text-[#008000]">Daniel Walker</h1>
      <p className="section__text__p2">Software Developer, Secondary Mathematics Instructor</p>
      <div className="btn-container">
        <button className="btn btn-color-1"  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dannondorf@gmail.com&su=Hiring%20Inquiry&body=Hi%20Daniel,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.', '_blank')}>
          Email Me
        </button>
        <button className="btn btn-color-2" onClick={() => window.open('/resume_daniel_walker051525.pdf', '_blank')}>
          Resume
        </button>
        <button className="btn btn-color-2" onClick={() => window.open('https://www.linkedin.com/in/daniel-walker-b74ba0312/', '_blank')}>
          LinkedIn
        </button>
        <button className="btn btn-color-2" onClick={() => window.open('https://github.com/BSDannondorf', '_blank')}>
          GitHub
        </button>

      </div>
      {/* <div id="socials-container">
        <a href="https://www.linkedin.com/in/daniel-walker-b74ba0312/" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon" />
        </a>
        <a href="https://github.com/BSDannondorf?tab=repositories" target="_blank">
          <img src={githubIcon} alt="GitHub icon" className="icon" />
        </a>
      </div> */}
    </div>
  </section>
    </div>
  )
}

export default Profile