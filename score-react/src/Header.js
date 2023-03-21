import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/animate.css';
import './assets/css/tiny-slider.css';
import './assets/css/glightbox.min.css';
import './assets/css/main.css';
import logo from './assets/images/logo/logo.png'
import 'bootstrap/dist/js/bootstrap.js';


function Header() {

  return (
    
<header
  className="header navbar-area"
  style={{ boxShadow: "2px 2px 5px #bebaba61",position: "fixed" }}
>
  

  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12">
        <div className="nav-inner">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              <img
                src={logo}
                style={{ marginLeft: 15 }}
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler mobile-menu-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" style={{color:"transparent"}}
            >
              <span className="toggler-icon" />
              <span className="toggler-icon" />
              <span className="toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse sub-menu-bar"
              id="navbarSupportedContent"
            >
              <ul id="nav" className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a href="#curriculum">Curriculum</a>
                </li>
                <li className="nav-item">
                  <a href="#courses">Courses</a>
                </li>
                <li className="nav-item">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="#faq">FAQ</a>
                </li>
                <li className="nav-item">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
)
}
export default Header;
