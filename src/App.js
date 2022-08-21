import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Navigation";
import Header from "./Header";
import Summary from "./Summary";
import Education from "./Education";
import Experiences from "./Experiences";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Navigation>
        <div className="site-contents">
            <div id="home">
              <Header />
            </div>
           
            <div id="summary">
              <Summary />
            </div>
            
            <div id="education">
              <Education />
            </div>
            
            <div id="experience">
              <Experiences />
            </div>
            
            <div id="skills">
              <Skills />
            </div>
           
        </div>
      </Navigation>
    </div>
  );
}

export default App;
