

import $ from 'jquery';


$(document).ready(function(){
	$("#features-btn1").click(function(){
	$("#features1").toggle();
	});
		$("#features-btn2").click(function(){
	$("#features2").toggle();
	});
		$("#features-btn3").click(function(){
	$("#features3").toggle();
	});
		$("#features-btn4").click(function(){
	$("#features4").toggle();
	});
	
			$("#course-btn1").click(function(){
$("#course-btn1").addClass("active");
$("#course-btn2").removeClass("active");
$("#ielts1").fadeIn();
$("#ielts2").fadeIn();
$("#toefl1").hide();
$("#toefl2").hide();
	
	});
				$("#course-btn2").click(function(){
$("#course-btn2").addClass("active");
$("#course-btn1").removeClass("active");
$("#toefl1").fadeIn();
$("#toefl2").fadeIn();
$("#ielts1").hide();
$("#ielts2").hide();
	
	});
			
	$("#p-btn1").click(function(){
$("#p-btn1").addClass("active");
$("#p-btn2").removeClass("active");
$("#p-btn3").removeClass("active");
$("#pielts1").fadeIn();
$("#pielts2").fadeIn();
$("#ptoefl1").hide();
$("#ptoefl2").hide();
$("#ptoefl3").hide();
$("#ptoefl4").hide();
	
	});
$("#p-btn2").click(function(){
$("#p-btn2").addClass("active");
$("#p-btn1").removeClass("active");
$("#p-btn3").removeClass("active");
$("#ptoefl1").fadeIn();
$("#ptoefl2").fadeIn();
$("#pielts1").hide();
$("#pielts2").hide();
$("#ptoefl3").hide();
$("#ptoefl4").hide();
	
	});
	$("#p-btn3").click(function(){
$("#p-btn3").addClass("active");
$("#p-btn1").removeClass("active");
$("#p-btn2").removeClass("active");
$("#ptoefl3").fadeIn();
$("#ptoefl4").fadeIn();
$("#pielts1").hide();
$("#pielts2").hide();
$("#ptoefl1").hide();
$("#ptoefl2").hide();
	
	});
	});

function Faq() {

  return (

<div className="faq section">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
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
              FAQ
            </h2>
          </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-general"
            role="tabpanel"
          >
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne1"
                    aria-expanded="false"
                    aria-controls="collapseOne1"
                  >
                    <span>What is the refund policy?</span>
                    <i className="lni lni-chevron-down" />
                  </button>
                </h2>
                <div
                  id="collapseOne1"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne1"
                  data-bs-parent="#accordionExample"
                  style={{}}
                >
                  <div className="accordion-body">
                    <p>
                      If you subscribed, you get a 7-day free trial during which
                      you can cancel at no penalty. After that, we don’t give
                      refunds, but you can cancel your subscription at any time
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    <span>
                      Is this course really 100% online? Do I need to attend any
                      classes in person?
                    </span>
                    <i className="lni lni-chevron-down" />
                  </button>
                </h2>
                <div
                  id="collapseTwo2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      This course is completely online, so there’s no need to
                      show up to a classroom in person. You can access your
                      lectures, readings and assignments anytime and anywhere
                      via the web or your mobile device.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree3"
                    aria-expanded="false"
                    aria-controls="collapseThree3"
                  >
                    <span>
                      How long does it take to complete the Specialization?
                    </span>
                    <i className="lni lni-chevron-down" />
                  </button>
                </h2>
                <div
                  id="collapseThree3"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>What background knowledge is necessary?</p>
                    <p>
                      Learners at the intermediate or advanced level of English
                      proficiency will most benefit from the content. Learners
                      do not need prior experience with the IELTS exam to take
                      the courses in this specialization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour4"
                    aria-expanded="false"
                    aria-controls="collapseFour4"
                  >
                    <span>
                      Do I need to take the courses in a specific order?
                    </span>
                    <i className="lni lni-chevron-down" />
                  </button>
                </h2>
                <div
                  id="collapseFour4"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Yes , the courses must be taken in order .</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive5"
                    aria-expanded="false"
                    aria-controls="collapseFive5"
                  >
                    <span>
                      Will I earn university credit for completing the
                      Specialization?
                    </span>
                    <i className="lni lni-chevron-down" />
                  </button>
                </h2>
                <div
                  id="collapseFive5"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>No, you will not. This is a test-prep specialization.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix6"
                    aria-expanded="false"
                    aria-controls="collapseSix6"
                  >
                    <span>
                      What will I be able to do upon completing the
                      Specialization?
                    </span>
                    <i className="lni lni-chevron-down" />
                  </button>
                </h2>
                <div
                  id="collapseSix6"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      You will be familiar with every facet of the IELTS exam,
                      and you will be able to apply many useful tips and
                      strategies
                    </p>
                  </div>
                </div>
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
export default Faq;
