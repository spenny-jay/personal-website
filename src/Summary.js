import './Summary.css';
import { Container, Col, Row } from 'react-bootstrap';

const Summary = () => {
    return ( 
        <Container className="subsection">
            <Row>
                <Col md={3}>
                    <h3 className="subheader">Summary</h3>
                </Col>
                <Col md>
                    <p className="summary-text">Determined and ambitious software engineer who is passionate about technology and communications. Experienced in full-stack web-development and working in team-oriented environments. Current fourth-year student studying Computer Science at Virginia Tech. Seeking full-time employment for Jan 2023.</p>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Summary;