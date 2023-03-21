import british from "./assets/images/clients/british.png";
import idp from "./assets/images/clients/idp.svg";
import camb from "./assets/images/clients/cambridge3.svg";
import logo2 from './assets/images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
function Logolist() {

  return (

<div className="logo-list">
  <div className="container">
    <div
      className="row"
      style={{
        maxWidth: "100%",
        justifyContent: "center",
        margin: "auto",
        padding: "inherit"
      }}
    >
      <div className="col-lg-2 col-md-4 col-4">
        <a href="javascript:void(0)">
          <img
            src={british}
            style={{ marginRight: 12 }}
            className="img-fluid"
            alt="Bluehost logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-4">
        <a href="javascript:void(0)">
          <img
            src={idp}
            style={{ width: 500, marginLeft: 12 }}
            className="img-fluid"
            alt="Hostgator logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-4">
        <a href="javascript:void(0)">
          <img
            src={camb}
            style={{ width: 500, marginLeft: 12 }}
            className="img-fluid"
            alt="Green Geeks logo"
          />
        </a>
      </div>
    </div>
  </div>
  <footer className="footer-59391">
    <div className="border-bottom pb-5 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <form action="#" className="subscribe mb-4 mb-lg-0">
              <div className="form-group">
                <img
                  style={{ filter: "grayscale(0)" }}
                  src={logo2}
                  width="350px"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-6 text-lg-center">
            <h4> Pages </h4> <br />
            <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#curriculum">Curriculum</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4> Follow Us </h4> <br />
            <ul className="list-unstyled nav-links social nav-right text-lg-right">
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faTwitter}style={{margin:12}} />

                </a>
              </li>
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faInstagram} style={{margin:12}} />

                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF}style={{margin:12}} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0"></div>
        <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0"></div>
        <div className="col-lg-4 text-lg-left order-3 order-lg-3">
          <p className="m-0 text-muted">
            <small>score-ielts.com © 2021. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" className="scroll-top btn-hover" style={{ display: "flex" }}>
    <i className="lni lni-chevron-up" />
  </a>
</div>



)
}
export default Logolist;
