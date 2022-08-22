import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Navigation";
import Header from "./Header";
import Summary from "./Summary";
import Education from "./Education";
import Experiences from "./Experiences";
import Skills from "./Skills";

/**
 * Parent component that displays the various sections
 * and navbar
 */
function App() {
  return (
    <div className="App">
      <Navigation>
        <div className="site-contents">
            <Header />
            <Summary />
            <Education />
            <Experiences />
            <Skills />
        </div>
      </Navigation>
    </div>
  );
}

export default App;
