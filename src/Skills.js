import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

/**
 * Displays my skills and language proficiencies
 */
const Skills = () => {
    return ( 
        <Container id="skills" className="subsection">
            <Row>
                <Col md={3}>
                    <h3 className="subheader">Skills</h3>
                </Col>
                <Col md>
                    <h5 className="skill-title">Languages/Libraries/Frameworks</h5>
                    <p className="skill-list">JavaScript, Java, C, SQL, Python, MATLAB, React.js, Vue.js, Bootstrap, Node.js, Express.js</p>

                    <h5 className="skill-title">Miscellaneous</h5>
                    <p className="skill-list">AWS, Git, HTML, CSS, PostgreSQL, MongoDB, Unix, Jenkins, JUnit, Nightwatch.js, Agile Development</p>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Skills;