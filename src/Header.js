import { Container } from "react-bootstrap";
import ProfilePic from './images/pfp.png'
import "./Header.css";
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';


const Header = () => {
    return ( 
        <Container className="header">
            <div className="profile-pic-container">
                <img 
                    id="profile-pic" 
                    src={ProfilePic} 
                    alt="Spencer Josi's Profile Pic"
                />
            </div>
            <div className="title-container">
                <p className="name">Spencer Josi</p>
                <p className="title">Full-Stack Software Developer</p>
                <div className="icons">
                    <a href="https://github.com/spenny-jay" className="icon"> GitHub <Github /> </a>
                    <a href="https://www.linkedin.com/in/spencer-josi/" className="icon">| Linkedin <Linkedin /></a>
                    <a href="mailto:spenceraj@vt.edu" className="icon">
                        |  Email <Envelope />
                    </a>
                </div>
                
            </div>
        </Container>
     );
}
 
export default Header;