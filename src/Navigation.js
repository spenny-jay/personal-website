import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import sjPath from './images/sj-logo.png'

/**
 * Displays the navigation bar on the top of the page to navigate
 * through the web page. Dynamically resizes according to screen size, 
 * collapsing the links for smaller screen sizes. Also has a button
 * to download a resume (stored in Google Drive)
 */
const Navigation = (props) => {
    return ( 
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img alt="Spencer Josi" src={sjPath} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <a className="nav-link" href="#summary">Summary</a>
                            <a className="nav-link" href="#education">Education</a>
                            <a className="nav-link" href="#experience">Experience</a>
                            <a className="nav-link" href="#skills">Skills</a>
                        </Nav>
                        <Nav className="ml-auto">
                            <a 
                                href="https://drive.google.com/file/d/1EId-1Jpb84NYfn3wpH4pX8jKmVNcaq-P/view?usp=sharing" 
                                id="resume"
                            >Resume</a>
                        </Nav>
                        </Navbar.Collapse>  
                </Container>
            </Navbar>
            { props.children }
        </>
     );
}
 
export default Navigation;