import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'


const Navigation = (props) => {
    return ( 
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Spencer Josi</Navbar.Brand>

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
                </Container>
            </Navbar>
            { props.children }
        </>
     );
}
 
export default Navigation;