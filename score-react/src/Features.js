
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


function Features() {

  return (
<div className="about-us section" style={{ background: "white" }}>
  <div className="section-title">
    <div className="section-icon wow zoomIn" data-wow-delay=".1s">
      <i className="lni lni-graduation" />
    </div>
    <h2 className="wow fadeInUp" data-wow-delay=".1s">
      Our Features
    </h2>
	<FontAwesomeIcon icon={['fab', 'apple']} />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12">
        <div className="about-left">
          <div className="about-title align-left">
            <h2
              className="wow fadeInUp"
              data-wow-delay=".1s"
              style={{ fontFamily: "system-ui", marginTop: 70 }}
            >
              Our courses Will teach you:{" "}
            </h2>
            <div className="button wow fadeInUp" data-wow-delay="1s"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="about-right wow fadeInRight" data-wow-delay=".1s">
          <div className="u-repeater u-repeater-1">
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-2">
                <span className="u-icon u-icon-circle u-text-palette-2-base u-icon-2">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 515.556 515.556"
                    style={{}}
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#svg-0b51"
                    />
                  </svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 515.556 515.556"
                    id="svg-0b51"
                  >
                    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                  </svg>
                </span>
                <p className="u-text u-text-3">
             
              
                  		  <FontAwesomeIcon icon={faCheckCircle} style={{ color: "red", fontSize: "20pt", whiteSpace: "nowrap" }}/>

                  how this exam is graded based on our knowledge
                </p>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-3">
                <span className="u-icon u-icon-circle u-text-palette-2-base u-icon-3">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 515.556 515.556"
                    style={{}}
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#svg-d8c2"
                    />
                  </svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 515.556 515.556"
                    id="svg-d8c2"
                  >
                    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                  </svg>
                </span>
                <p style={{}} className="u-text u-text-3">
                  {" "}
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: "red", fontSize: "20pt", whiteSpace: "nowrap" }}/>

                  how to deal with complicated paragraph
                </p>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-4">
                <span className="u-icon u-icon-circle u-text-palette-2-base u-icon-4">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 515.556 515.556"
                    style={{}}
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#svg-8ddf"
                    />
                  </svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 515.556 515.556"
                    id="svg-8ddf"
                  >
                    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                  </svg>
                </span>
                <p style={{}} className="u-text u-text-3">
                  {" "}
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: "red", fontSize: "20pt", whiteSpace: "nowrap" }}/>

                  how to help you figure out the best possible answers
                </p>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-5">
                <span className="u-icon u-icon-circle u-text-palette-2-base u-icon-5">
                  <svg
                    className="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 515.556 515.556"
                    style={{}}
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#svg-3f26"
                    />
                  </svg>
                  <svg
                    className="u-svg-content"
                    viewBox="0 0 515.556 515.556"
                    id="svg-3f26"
                  >
                    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                  </svg>
                </span>
                <p style={{}} className="u-text u-text-3">
                  {" "}
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: "red", fontSize: "20pt", whiteSpace: "nowrap" }}/>

                  how to deal with speaking and listening questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)
}
export default Features;
