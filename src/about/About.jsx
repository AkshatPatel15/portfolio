
import "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/about/About.css"
import Container from 'react-bootstrap/Container';

import '/Users/nishvaria/NISH/Nishportfolio/portfolio/src/static.css';
import img2 from "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/resources/about_img_2.jpg";
import { IoLogoLinkedin,IoIosMail,IoIosPhonePortrait, IoLogoGithub } from "react-icons/io";
import Skillscard from "./Skillscard";
import Skillsdict from "./Skillsdict";

function About() {

  const mailto = () =>{


  }
  return (
    <div className="static">
      <Container>
        <div className="maindiv">
          
          {/* section1 from heree */}
          
            <div className="subdiv1">
              <div className="imgdiv"> 
                <img src={img2} className="img" alt = "img"/>
              </div>
              <div className="textdiv">
                  <p className="name">Hello, I am Nish</p>
                  <p className="role">Business Analyst</p>
                  <p className="summary">Great track record in both Walmart retail and the IT industry, I am a highly motivated and detail-
                    oriented individual with a passion for developing innovative business solutions. My one-year
                    experience as a retail associate and IT professional has equipped me with the skills necessary to
                    exceed expectations and consistently deliver tangible results.
                    Interviewed stakeholders to gather information on systems, boosting the requirement gathering
                    as compared to other groups and delivering the project before the deadline.</p>

                    <a href = "mailto:varia.nish68@gmail.com"><IoIosMail className="mail"></IoIosMail></a>
                    <a href = "tel:+17057700631" target="_blank"><IoIosPhonePortrait className="mob" ></IoIosPhonePortrait></a> 
                    <a href = "https://www.linkedin.com/in/nishvariabusinessanalyst/" target="_blank"><IoLogoLinkedin className="mob"/></a>
                    <a href = "https://www.linkedin.com/in/nishvariabusinessanalyst/" target="_blank"><IoLogoGithub   className="mob"/></a>
              </div>
            </div>
            <p className="line"></p>

            {/* section2 from heree */}

            <div className="subdiv2">
              <div className="title-about">
                <h3>High-Level Details of My Profile</h3>
                <div className="listview">
                  <ul>
                    <li> <p>Currently Enrolled in Information System Business Analysis Post-Graduate Program at George Brown College.</p></li>
                    <li> <p>Completed Mobile Application Development Post-Graduate Program with Dean's List and have a 4.0 GPA from Georgian College (Ontario, Canada).</p></li>
                    <li> <p>1 year of experience as an Android Application Developer at Friendly-IT Solution</p></li>
                    <li> <p>Bachelor's in Computer Engineering with 8.67 CGPA.</p></li>
                  </ul>
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
