
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faBarChart } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'




function Courses() {

  return (
<div className="about-us section" style={{ marginTop: "-2rem" }}>
  <div className="section-title">
    <div className="section-icon wow zoomIn" data-wow-delay=".1s">
      <i className="lni lni-graduation" />
    </div>
    <h2 className="wow fadeInUp" data-wow-delay=".1s">
      Our Courses Will Include
    </h2>
  </div>
  <div className="text-icon__container" style={{ margin: "auto" }}>
    <ul className="text-icon__list section__body">
      <li className="text-icon__list-item">

		  <FontAwesomeIcon icon={faHeadphones} style={{ color: "red", fontSize: "2.5rem" }}/>

        <h3> Listening </h3>
        <p />
      </li>
      <li className="text-icon__list-item">
      <FontAwesomeIcon icon={faBook}  style={{ color: "red", fontSize: "2.5rem" }} />

        <h3> Reading </h3>
        <p />
      </li>
      <li className="text-icon__list-item">
  
      <FontAwesomeIcon icon={faWarehouse}  style={{ color: "red", fontSize: "2.5rem" }} />

        <h3> Writing topics </h3>
        <p />
      </li>
      <li className="text-icon__list-item">
        		  <FontAwesomeIcon icon={faBarChart}  style={{ color: "red", fontSize: "2.5rem" }} />

        <h3> Writing skills</h3>
        <p />
      </li>
      <li className="text-icon__list-item">
        <FontAwesomeIcon icon={faMicrophone}  style={{ color: "red", fontSize: "2.5rem" }} />
        <h3>Speaking</h3>
        <p />
      </li>
    </ul>
  </div>
  <div id="curriculum"> </div>
</div>


)
}
export default Courses;
