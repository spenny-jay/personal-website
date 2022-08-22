import { Container, Row, Col } from "react-bootstrap";
import collegeImg from './images/VT.png';
import "./Education.css";

/**
 * Displays information about the college
 * I attended (gpa, degree, etc.)
 */
const Education = () => {
    return ( 
        <Container id="education" className="subsection">
            <Row>
                <Col md={3}>
                    <h3 className="subheader">Education</h3>
                </Col>
                <Col className="college-info" md>
                        <img src={collegeImg} alt="Virginia Tech img" className="college-img"/>
                        <div className="college-details">
                            <h4 className="school-name">Virginia Tech</h4>
                            <p className="degree"><span className="bold">Bachelor of Science </span>(expected Dec 2022)</p>
                            <p className="gpa"><span className="bold">GPA: 3.72 </span>(In-Major GPA: 3.83)</p>
                        </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Education;