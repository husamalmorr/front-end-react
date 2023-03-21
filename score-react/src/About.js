import './assets/css/bootstrap.min.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/animate.css';
import './assets/css/tiny-slider.css';
import './assets/css/glightbox.min.css';
import './assets/css/main.css';
import video from './assets/video.mp4'
function About() {

  return (
<div className="about-us section" style={{ width: "100%" }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12">
        <div className="about-left">
          <div className="about-title align-left">
            <span className="wow fadeInDown" data-wow-delay=".2s">
              Your Best Choice
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".1s"
              style={{ fontFamily: "system-ui", textAlign: "left" }}
            >
              ONE WEEK workshop that will improve your answering skills more
              than any other course.
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s"></p>
            <ul className="hero_list" style={{ padding: 0 }}>
              <li className="hero_list_item">
                {" "}
                Customized Training for your grade
              </li>
              <li className="hero_list_item">
                Available in Arabic &amp; English
              </li>
              <li className="hero_list_item">Affordable fee</li>
            </ul>
            <p />
            <div id="features"> </div>
            <div className="button">
              <a href="#courses" className="btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="about-right wow fadeInRight" data-wow-delay=".1s">
          <video controls aria-controls='true' className="video" width={620} height={380} >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</div>

)
}
export default About;
