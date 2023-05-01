
import "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/about/About.css"
import Container from 'react-bootstrap/Container';

// import '/Users/nishvaria/NISH/Nishportfolio/portfolio/src/static.css';
import img2 from "../resources/about_img_2.jpg";
import { IoLogoLinkedin,IoIosMail,IoIosPhonePortrait, IoLogoGithub } from "react-icons/io";
import Skillscard from "./Skillscard";
import Skillsdict from "./Skillsdict";

function About() {

  return (
    <div className="static">
      <Container>
        <div className="maindiv">
            <div className="subdiv1">
              <div className="imgdiv"> 
                <img src={img2} className="img" alt = "img"/>
              </div>
              <div className="roletitle_div">
                <div>
                  <h1>
                    Business Analyst
                  </h1>
                  <FontAwesomeIcon icon={faMobile}/>
                      <h3>Number</h3>
                  <FontAwesomeIcon icon={faMailForward}/>
                      <h3>Number</h3>
                </div>
              </div>
            </div>
            <p className="line"></p>

            {/* section3 from heree */}
              <div className="cardclass">
                  {Skillsdict.map((skill, index) => (
                  <Skillscard 
                    name={skill.skillname}
                    logo={skill.logo} 
                  />
                    ))}
              </div>
        </div>
      </Container>

    </div>

  );
}

export default About;