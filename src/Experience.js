import './Experience.css';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { CaretUp, CaretDown } from 'react-bootstrap-icons';

/**
 * Displays all of the job experience I have had.
 * Additionally, the list of accomplishments for each
 * job entry can be toggled to be displayed or hidden
 * 
 * @prop experience: object containing a single
 * job experience information (startDate, company name, etc.)
 */
const Experience = ({ experience }) => {
    //used to toggle the list of accomplishments for the job experience
    const [showMore, setShowMore] = useState(false);

    /**
     * Called dynamically when the user interacts with the
     * Show More/Show Less button. It updates the text 
     * and icon within the toggle button
     */
    const showMoreContent = () => {
        if (!showMore) {
            return ( 
                <span>Show More <CaretDown /></span> 
            )
        }
        return ( 
            <span>Show Less  <CaretUp /></span> 
        )
    }

    return ( 
        <div id="experience" className="exp-container">
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
            
            <div className={`exp-accomplishments ${showMore ? 'appear' : 'collapse-exp'}`}>
                <ul>
                    { experience.accomplishments.map((acc, i) => <li key={i}>{ acc }</li>) }
                </ul>
            </div>
        </div>
     );
}
 
export default Experience;