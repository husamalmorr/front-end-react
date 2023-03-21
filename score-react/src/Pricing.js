

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

function Pricing() {

  return (

<div className="pricing-plans text-center" style={{ marginTop: "10rem" }}>
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-sm-12 col-md-10 col-md-offset-2">
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
            Pricing
          </h2>
          <div className="text-center">
            {" "}
            <button
              id="p-btn1"
              style={{ paddingLeft: 30, paddingRight: 30 }}
              className="btn btn-danger"
            >
              {" "}
              IELTS{" "}
            </button>
            <button
              id="p-btn2"
              style={{ paddingLeft: 30, paddingRight: 30 }}
              className="btn btn-danger active"
            >
              {" "}
              TOEFL{" "}
            </button>
            <button
              id="p-btn3"
              style={{ paddingLeft: 30, paddingRight: 30 }}
              className="btn btn-danger"
            >
              {" "}
              TOEFL &amp; prep exam{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{ margin: "auto", justifyContent: "center" }}>
      <div className="col-md-5 animated slideInRight">
        <div
          className="card pricing-box rounded"
          id="pielts1"
          style={{ display: "none" }}
        >
          <div className="card-block">
            <h4 className="card-title">IELTS General Academic Edition</h4>
            <h6 className="card-text">
              <span className="amount">
                <strike
                  className="amount"
                  style={{ fontSize: "25pt", color: "#7a7979" }}
                >
                  150
                </strike>{" "}
                <sup className="currency">$</sup>75
              </span>
            </h6>
          </div>
          <ul className="hero_list text-center" style={{ padding: 0 }}>
            <li className="hero_list_item"> An overview of the IELTS test</li>
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
              Notes about the grading strategy used
            </li>
            <li className="hero_list_item">
              Time management skills to solve the test <br />{" "}
              <span style={{ marginLeft: 30 }}> on the exact time needed </span>
            </li>
          </ul>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="H8ULZ74GAA7WL"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </form>
        </div>
      </div>
      <div className="col-md-5">
        <div
          className="card pricing-box rounded"
          id="pielts2"
          style={{ display: "none" }}
        >
          <div className="card-block">
            <h4 className="card-title">IELTS Indicator Edition</h4>
            <h6 className="card-text">
              <strike
                className="amount"
                style={{ fontSize: "25pt", color: "#7a7979" }}
              >
                150
              </strike>
              <sup className="currency">$</sup>
              <span className="amount">75</span>
            </h6>
          </div>
          <ul className="hero_list text-center" style={{ padding: 0 }}>
            <li className="hero_list_item"> An overview of the IELTS test</li>
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
              Notes about the grading strategy used
            </li>
            <li className="hero_list_item">
              Time management skills to solve the test <br />{" "}
              <span style={{ marginLeft: 30 }}> on the exact time needed </span>
            </li>
          </ul>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="A3F2RH8YQQFJ2"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </form>
        </div>
      </div>
      <div className="col-md-5" id="ptoefl1" style={{}}>
        <div className="card pricing-box rounded">
          <div className="card-block">
            <h4 className="card-title">TOEFL IBT Edition</h4>
            <h6 className="card-text">
              <strike
                className="amount"
                style={{ fontSize: "26pt", color: "#7a7979" }}
              >
                150
              </strike>
              <sup className="currency">$</sup>
              <span className="amount">75</span>
            </h6>
          </div>
          <ul className="hero_list text-center" style={{ padding: 0 }}>
            <li className="hero_list_item">
              {" "}
              View correct answers in the Reading and Listening sections
            </li>
            <li className="hero_list_item">
              Listen to sample Speaking responses
            </li>
            <li className="hero_list_item">Read sample Writing responses</li>
            <li className="hero_list_item">
              Get an explanation for grading strategy
            </li>
          </ul>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="NG9G6WMEYFEXC"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </form>
        </div>
      </div>
      <div className="col-md-5" id="ptoefl2" style={{}}>
        <div className="card pricing-box rounded">
          <div className="card-block">
            <h4 className="card-title">TOEFL Home Edition</h4>
            <h6 className="card-text">
              <strike
                className="amount"
                style={{ fontSize: "26pt", color: "#7a7979" }}
              >
                150
              </strike>
              <sup className="currency">$</sup>
              <span className="amount">75</span>
            </h6>
          </div>
          <ul className="hero_list text-center" style={{ padding: 0 }}>
            <li className="hero_list_item">
              {" "}
              View correct answers in the Reading and Listening sections
            </li>
            <li className="hero_list_item">
              Listen to sample Speaking responses
            </li>
            <li className="hero_list_item">Read sample Writing responses</li>
            <li className="hero_list_item">
              Get an explanation for grading strategy
            </li>
          </ul>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="AC7LF635NSJQ4"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </form>
        </div>
      </div>
      <div className="col-md-5" id="ptoefl3" style={{ display: "none" }}>
        <div className="card pricing-box rounded">
          <div className="card-block">
            <h4 className="card-title">TOEFL IBT preparation exam Edition</h4>
            <h6 className="card-text">
              <strike
                className="amount"
                style={{ fontSize: "26pt", color: "#7a7979" }}
              >
                150
              </strike>
              <sup className="currency">$</sup>
              <span className="amount">95</span>
            </h6>
          </div>
          <ul className="hero_list text-center" style={{ padding: 0 }}>
            <li className="hero_list_item">
              {" "}
              45 minutes lecuture explaining about preparation exam{" "}
            </li>
            <li className="hero_list_item">
              {" "}
              View correct answers in the Reading and Listening sections
            </li>
            <li className="hero_list_item">
              Listen to sample Speaking responses
            </li>
            <li className="hero_list_item">Read sample Writing responses</li>
            <li className="hero_list_item">
              Get an explanation for grading strategy
            </li>
          </ul>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="PMC6KNY2XMLKC"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </form>
        </div>
      </div>
      <div className="col-md-5" id="ptoefl4" style={{ display: "none" }}>
        <div className="card pricing-box rounded">
          <div className="card-block">
            <h4 className="card-title">TOEFL Home preparation exam Edition</h4>
            <h6 className="card-text">
              <strike
                className="amount"
                style={{ fontSize: "26pt", color: "#7a7979" }}
              >
                150
              </strike>
              <sup className="currency">$</sup>
              <span className="amount">95</span>
            </h6>
          </div>
          <ul className="hero_list text-center" style={{ padding: 0 }}>
            <li className="hero_list_item">
              {" "}
              45 minutes lecuture explaining about preparation exam{" "}
            </li>
            <li className="hero_list_item">
              {" "}
              View correct answers in the Reading and Listening sections
            </li>
            <li className="hero_list_item">
              Listen to sample Speaking responses
            </li>
            <li className="hero_list_item">Read sample Writing responses</li>
            <li className="hero_list_item">
              Get an explanation for grading strategy
            </li>
          </ul>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="HPYVFWGAYENYA"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="faq"> </div>
</div>



)
}
export default Pricing;
