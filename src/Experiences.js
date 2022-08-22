import { Container, Row, Col } from "react-bootstrap";
import Experience from './Experience';
import './Experiences.css';

const experiences = require('./experiences.json').experiences

/**
 * Section for work experiences. Iteratively
 * creates Experience components for each job experience
 */
const Experiences = () => {
    return ( 
        <Container className="subsection">
            <Row>
                <Col md={3}>
                    <h3 className="exp-top">Work Experience</h3>
                </Col>
                <Col md>
                    { experiences.map(experience => <Experience key={experience.id} experience={experience} />) }
                </Col>
            </Row>
        </Container>
     );
}
 
export default Experiences;