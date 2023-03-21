function Contact() {

  return (

<div id="contact-us" className="contact-us section">
  <div className="col-12">
    <div className="section-title">
      <div
        className="section-icon wow zoomIn"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "zoomIn"
        }}
      >
        <i className="lni lni-graduation" />
      </div>
      <h2
        className="wow fadeInUp"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}
      >
        Contact Us
      </h2>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12 col-12">
        <div className="form-main">
          <h3 className="title">
            <span>Ready to Start?</span>
            Let's Talk
          </h3>
          <form
            className="form"
            method="post"
            action="https://demo.graygrids.com/themes/edugrids/assets/mail/mail.php"
          >
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder=""
                    required="required"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Your Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder=""
                    required="required"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Your Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder=""
                    required="required"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Your Phone Number</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder=""
                    required="required"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group message">
                  <label>Your Message</label>
                  <textarea name="message" placeholder="" defaultValue={""} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group button">
                  <button type="submit" className="btn ">
                    Submit Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="contact-info">
          <div className="single-info">
            <i className="lni lni-phone" />
            <h4>Let's Talk</h4>
            <p className="no-margin-bottom"> Phone: (+971) 123 456 789</p>
          </div>
          <div className="single-info">
            <i className="lni lni-envelope" />
            <h4>E-mail Us</h4>
            <p>contact@score-ielts.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



)
}
export default Contact;
