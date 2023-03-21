

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

function Courses3() {

  return (

<div
  className="courses section"
  style={{ marginTop: "-10rem", padding: 0 }}
>
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
            Our Courses
          </h2>
          <button
            id="course-btn1"
            style={{ paddingLeft: 30, paddingRight: 30 }}
            className=" btn btn-danger active"
          >
            {" "}
            IELTS{" "}
          </button>
          <button
            id="course-btn2"
            style={{ paddingLeft: 30, paddingRight: 30 }}
            className="btn btn-danger"
          >
            {" "}
            TOEFL{" "}
          </button>
        </div>
      </div>
    </div>
    <div className="single-head">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12" id="ielts1">
          <div
            className="single-course wow fadeInUp"
            data-wow-delay=".2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <div className="course-image"></div>
            <div className="content">
              <h3>
                <a href="course-details-1.html">
                  IELTS General Academic Edition
                </a>
              </h3>
              <p>
                Book your IELTS preparation course to get instant access to the
                online training course link . Up to 4 hours of online IELTS
                preparation Detailed feedback and model answers for all
                activities Expert IELTS tips and study strategies
              </p>
              <div id="features1" style={{ display: "none" }}>
                <h3>
                  <a href="course-details-1.html">
                    In this course you will get:
                  </a>
                </h3>
                <ul className="hero_list" style={{ padding: 0 }}>
                  <li className="hero_list_item">
                    {" "}
                    An overview of the IELTS test
                  </li>
                  <li className="hero_list_item">
                    Listening techniques and practice
                  </li>
                  <li className="hero_list_item">
                    Reading and Writing techniques and practice
                  </li>
                  <li className="hero_list_item">
                    Speaking interview techniques and practice
                  </li>
                  <li className="hero_list_item">
                    Notes about the grading strategy used.
                  </li>
                  <li className="hero_list_item">
                    Time management skills to solve the test on the exact time
                    needed
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-content" style={{ padding: 15 }}>
              <ul className="review">
                <li>
                  {" "}
                  <p> &nbsp; &nbsp; Duration : 3 Hours </p>
                </li>
              </ul>
              <span className="tag">
                <button
                  id="features-btn1"
                  className="btn btn-alert"
                  style={{ background: "red", color: "white" }}
                >
                  Features{" "}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12" id="ielts2">
          <div
            className="single-course wow fadeInUp"
            data-wow-delay=".2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <div className="course-image"></div>
            <div className="content">
              <h3>
                <a href="course-details-1.html">IELTS Indicator Edition</a>
              </h3>
              <p>
                Book your IELTS preparation course to get instant access to the
                online training course link . Up to 4 hours of online IELTS
                preparation Detailed feedback and model answers for all
                activities Expert IELTS tips and study strategies
              </p>
              <div id="features2" style={{ display: "none" }}>
                <h3>
                  <a href="course-details-1.html">
                    In this course you will get:
                  </a>
                </h3>
                <ul className="hero_list" style={{ padding: 0 }}>
                  <li className="hero_list_item">
                    {" "}
                    An overview of the IELTS test
                  </li>
                  <li className="hero_list_item">
                    Listening techniques and practice
                  </li>
                  <li className="hero_list_item">
                    Reading and Writing techniques and practice
                  </li>
                  <li className="hero_list_item">
                    Speaking interview techniques and practice
                  </li>
                  <li className="hero_list_item">
                    Notes about the grading strategy used.
                  </li>
                  <li className="hero_list_item">
                    Time management skills to solve the test on the exact time
                    needed
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-content" style={{ padding: 15 }}>
              <ul className="review">
                <li>
                  {" "}
                  <p> &nbsp; &nbsp; Duration : 3 Hours </p>
                </li>
              </ul>
              <span className="tag">
                <button
                  id="features-btn2"
                  className="btn btn-alert"
                  style={{ background: "red", color: "white" }}
                >
                  Features{" "}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-12"
          id="toefl1"
          style={{ display: "none" }}
        >
          <div className="single-course">
            <div className="content">
              <h3>
                <a href="course-details-3.html">TOEFL IBT Edition</a>
              </h3>
              <p>
                This comprehensive prep course on TOEFL is meant for those who
                want to get good marks in the test. The best part is that study
                mode is online that you can do from anywhere. During the class,
                you can learn more important lessons in an easy way.
              </p>
              <div id="features3" style={{ display: "none" }}>
                <h3>
                  <a href="course-details-1.html">
                    In this course you will get:
                  </a>
                </h3>
                <ul className="hero_list" style={{ padding: 0 }}>
                  <li className="hero_list_item">
                    View correct answers in the Reading and Listening sections.
                  </li>
                  <li className="hero_list_item">
                    Listen to sample Speaking responses.
                  </li>
                  <li className="hero_list_item">
                    Read sample Writing responses.
                  </li>
                  <li className="hero_list_item">
                    Get an explanation for grading strategy
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-content">
              <ul className="review">
                <li>
                  {" "}
                  <p> Duration : 3 Hours </p>
                </li>
              </ul>
              <span className="tag">
                <button
                  id="features-btn3"
                  className="btn btn-alert"
                  style={{ background: "red", color: "white" }}
                >
                  Features{" "}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-12"
          id="toefl2"
          style={{ display: "none" }}
        >
          <div className="single-course">
            <div className="content">
              <h3>
                <a href="course-details-4.html">TOEFL Home Edition</a>
              </h3>
              <p>
                This comprehensive prep course on TOEFL is meant for those who
                want to get good marks in the test. The best part is that study
                mode is online that you can do from anywhere. During the class,
                you can learn more important lessons in an easy way. .
              </p>
              <div id="features4" style={{ display: "none" }}>
                <h3>
                  <a href="course-details-1.html">
                    In this course you will get:
                  </a>
                </h3>
                <ul className="hero_list" style={{ padding: 0 }}>
                  <li className="hero_list_item">
                    View correct answers in the Reading and Listening sections.
                  </li>
                  <li className="hero_list_item">
                    Listen to sample Speaking responses.
                  </li>
                  <li className="hero_list_item">
                    Read sample Writing responses.
                  </li>
                  <li className="hero_list_item">
                    Get an explanation for grading strategy
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-content">
              <ul className="review">
                <li>
                  {" "}
                  <p> Duration : 3 Hours </p>
                </li>
              </ul>
              <span className="tag">
                <button
                  id="features-btn4"
                  className="btn btn-alert"
                  style={{ background: "red", color: "white" }}
                >
                  Features{" "}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="pricing"> </div>
</div>


)
}
export default Courses3;
