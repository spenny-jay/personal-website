import { Container } from "react-bootstrap";
import ProfilePic from './images/pfp.png'
import "./Header.css";
import { Github, Linkedin } from 'react-bootstrap-icons';


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
                    <span> GitHub <Github /> </span>
                    <span>| Linkedin <Linkedin /></span>
                </div>
                
            </div>
        </Container>
     );
}
 
export default Header;