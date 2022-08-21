import './Experience.css';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { CaretUp, CaretDown } from 'react-bootstrap-icons';

const Experience = ({ experience }) => {
    const [showMore, setShowMore] = useState(false);

    const showMoreContent = () => {
        if (!showMore) {
            return ( 
                <span>Show More <CaretDown /></span> 
            )
        }
        return ( 
            <span>Show Less <CaretUp /></span> 
        )
    }

    return ( 
        <div className="exp-container">
            <Row>
                <Col xs={8}>
                    <div className="exp-header">
                        <img 
                            className="company-img"
                            src={require(`./images/company-${experience.id}.png`)} 
                            alt={`${experience.company} logo`}
                        />
                        <div className="job-title-details">
                            <h5 className="job-title">{ experience.title }</h5>
                            <h6 className="company-title">{experience.company }</h6>
                            <p className="date-range">{ experience.startDate} - {experience.endDate }</p>
                            <p className="location">{ experience.location }</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <button 
                        className="show-more-btn"
                        onClick={() => setShowMore(!showMore)}
                    >{ showMoreContent() }</button>
                </Col>
            </Row>
            
            <div className={`exp-accomplishments ${showMore ? 'appear' : 'collapse'}`}>
                <ul>
                    { experience.accomplishments.map((acc, i) => <li key={i}>{ acc }</li>) }
                </ul>
            </div>
        </div>
     );
}
 
export default Experience;