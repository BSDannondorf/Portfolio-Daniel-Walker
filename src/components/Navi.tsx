import './Navi.css'

function Navi() {
  return (
    <div>
        {/* <!-- DESKTOP NAVIGATION --> */}
        <nav id="desktop-nav">
            <div className="logo">Daniel Walker</div>
            <ul className="nav-links">
                <li><a href="#profile">Profile</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#featureSection">Projects</a></li>
            </ul>
        </nav>

        {/* <!-- HAMBURGER NAVIGATION --> */}
        <nav id="hamburger-nav">
            <div className="logo">Daniel Walker</div>
            <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu-links">
                <li><a href="#profile">Profile</a></li>
                <li><a href="#about">Experience</a></li>
                <li><a href="#experience">Projects</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navi