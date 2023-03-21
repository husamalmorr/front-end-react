import $ from 'jquery';


$(document).ready(function(){
	$("#features-btn1").trigger(function(){
	$("#features1").toggle();
	});
		$("#features-btn2").trigger(function(){
	$("#features2").toggle();
	});
		$("#features-btn3").trigger(function(){
	$("#features3").toggle();
	});
		$("#features-btn4").trigger(function(){
	$("#features4").toggle();
	});
	

				$("#c-btn1").click(function(){
$("#c-btn1").addClass("active");
$("#c-btn1").addClass("btn-danger");

$("#c-btn2").removeClass("active");
$("#c-btn2").removeClass("btn-danger");

$("#cielts1").fadeIn();
$("#ctoefl1").hide();
	
	});
					$("#c-btn2").click(function(){
$("#c-btn2").addClass("active");
$("#c-btn2").addClass("btn-danger");
$("#c-btn1").removeClass("active");
$("#c-btn1").removeClass("btn-danger");
$("#ctoefl1").fadeIn();
$("#cielts1").hide();
	
	});				

	});

function Courses2() {

  return (
<div className="courses section" style={{ marginTop: "-5rem" }}>
  <div className="container">
    <div className="row">
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
            Our curriculum
          </h2>
          <div className="text-center">
            {" "}
            <button
              id="c-btn1"
              style={{ paddingLeft: 30, paddingRight: 30 }}
              className=" btn btn-danger active"
            >
              {" "}
              IELTS{" "}
            </button>
            <button
              id="c-btn2"
              style={{ paddingLeft: 30, paddingRight: 30 }}
              className="btn btn-danger"
            >
              {" "}
              TOEFL{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="course-details section"
      style={{ position: "relative", top: "-6rem" }}
    >
      <div className="container">
        <div className="row">
          <div className=" col-lg-12 col-md-12">
            <div className="tab-content" id="myTabContent">
              <div className="course-overview">
                <div className="course-curriculum" id="cielts1">
                  <ul className="curriculum-sections">
                    <li className="single-curriculum-section">
                      <ul className="section-content" style={{ paddingLeft:0,
   marginLeft: 0}}>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne1">
                              <button
                                className="accordion-button"
                                style={{ background: "transparent" }}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne1"
                                aria-expanded="true"
                                aria-controls="collapseOne1"
                              >
                                <span
                                  style={{ color: "red", fontSize: "13pt" }}
                                >
                                  {" "}
                                  Introducation - 2 hours{" "}
                                </span>
                                <i className="lni lni-chevron-down" />
                              </button>
                            </h2>
                            <div
                              id="collapseOne1"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne1"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ol className="circle-bullets">
                                  <li>Before starting the exam 40 minutes</li>
                                  <li>Section of the exam</li>
                                  <li> Reading question type</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne2">
                              <button
                                className="accordion-button"
                                style={{ background: "transparent" }}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne2"
                                aria-expanded="true"
                                aria-controls="collapseOne1"
                              >
                                <span
                                  style={{ color: "red", fontSize: "13pt" }}
                                >
                                  Listening and Speaking - 2 hours{" "}
                                </span>
                                <i className="lni lni-chevron-down" />
                              </button>
                            </h2>
                            <div
                              id="collapseOne2"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne2"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ol className="circle-bullets">
                                  <li>Listening</li>
                                  <li>Speaking</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne3">
                              <button
                                className="accordion-button"
                                style={{ background: "transparent" }}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne3"
                                aria-expanded="true"
                                aria-controls="collapseOne3"
                              >
                                <span
                                  style={{ color: "red", fontSize: "13pt" }}
                                >
                                  Writing - 2 hours{" "}
                                </span>
                                <i className="lni lni-chevron-down" />
                              </button>
                            </h2>
                            <div
                              id="collapseOne3"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne3"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ol className="circle-bullets">
                                  <li>Writing</li>
                                  <li>Write your own essay</li>
                                  <li>View the practice test</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne4">
                                <button
                                  className="accordion-button"
                                  style={{ background: "transparent" }}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne4"
                                  aria-expanded="true"
                                  aria-controls="collapseOne4"
                                >
                                  <span
                                    style={{ color: "red", fontSize: "13pt" }}
                                  >
                                    Discussing - 2 hours{" "}
                                  </span>
                                  <i className="lni lni-chevron-down" />
                                </button>
                              </h2>
                              <div
                                id="collapseOne4"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne4"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <ol className="circle-bullets">
                                    <li>
                                      Discuss the result of your score in the
                                      practice test 20 minutes
                                    </li>
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="course-curriculum">
              <ul className="curriculum-sections">
                <li className="single-curriculum-section">
                  <ul
                    className="section-content"
                    id="ctoefl1"
                    style={{ display: "none" }}
                  >
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne1">
                          <button
                            className="accordion-button"
                            style={{ background: "transparent" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne1"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                          >
                            <span style={{ color: "red", fontSize: "13pt" }}>
                              Introducation - 2 hours{" "}
                            </span>
                            <i className="lni lni-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapseOne1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ol className="circle-bullets">
                              <li>Before starting the exam 40 minutes</li>
                              <li>Section of the exam</li>
                              <li> Reading question type</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne2">
                          <button
                            className="accordion-button"
                            style={{ background: "transparent" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne2"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                          >
                            <span style={{ color: "red", fontSize: "13pt" }}>
                              Speaking and Listening - 2 hours{" "}
                            </span>
                            <i className="lni lni-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapseOne2"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ol className="circle-bullets">
                              <li>Listening</li>
                              <li>Speaking</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne3">
                          <button
                            className="accordion-button"
                            style={{ background: "transparent" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne3"
                            aria-expanded="true"
                            aria-controls="collapseOne3"
                          >
                            <span style={{ color: "red", fontSize: "13pt" }}>
                              {" "}
                              Writing - 2 hours{" "}
                            </span>
                            <i className="lni lni-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapseOne3"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne3"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ol className="circle-bullets">
                              <li>Writing</li>
                              <li>Write your own essay</li>
                              <li>View the practice test</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne4">
                            <button
                              className="accordion-button"
                              style={{ background: "transparent" }}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne4"
                              aria-expanded="true"
                              aria-controls="collapseOne4"
                            >
                              <span style={{ color: "red", fontSize: "13pt" }}>
                                Discussing - 2 hours{" "}
                              </span>
                              <i className="lni lni-chevron-down" />
                            </button>
                          </h2>
                          <div
                            id="collapseOne4"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne4"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ol className="circle-bullets">
                                <li>
                                  Discuss the result of your score in the
                                  practice test 20 minutes
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div id="courses"> </div>
        </div>
      </div>
    </div>
  </div>
</div>


)
}
export default Courses2;
