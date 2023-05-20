
// import "./About.css"
import Container from 'react-bootstrap/Container';

import img2 from "../resources/about.jpeg";
import { IoLogoLinkedin,IoIosMail,IoIosPhonePortrait, IoLogoGithub } from "react-icons/io";
import Skillscard from "./Skillscard";
import Skillsdict from "./Skillsdict";

function About() {

  
  return (
      <Container>
          <img src={img2} alt="img" />

<div>
  <h3>Hello, I am Akshat</h3>
  <p>Software Developer</p>
  <p>
    Motivated and detail-oriented junior full-stack developer with a sturdy foundation in Computer Science, specializing in React.js and Python (Flask). Eager to contribute to dynamic projects and collaborate with cross-functional teams to deliver high-quality solutions. Passionate about learning and staying up to date with emerging technologies.
  </p>
  <a href="mailto:varia.nish68@gmail.com"><IoIosMail></IoIosMail></a>
  <a href="tel:+17057700631" target="_blank"><IoIosPhonePortrait></IoIosPhonePortrait></a>
  <a href="https://www.linkedin.com/in/nishvariabusinessanalyst/" target="_blank"><IoLogoLinkedin></IoLogoLinkedin></a>
  <a href="https://www.linkedin.com/in/nishvariabusinessanalyst/" target="_blank"><IoLogoGithub></IoLogoGithub></a>
</div>

<p></p>

<div>
  <h3>High-Level Details of My Profile</h3>
  <ul>
    <li><p>Currently Enrolled in Cloud Computing Post-Graduate Program at George Brown College.</p></li>
    <li><p>Completed Big data analysis Post-Graduate Program with Dean's List and have a 4.0 GPA from Georgian College (Ontario, Canada).</p></li>
    <li><p>1 year of experience as a Web Development at Friendly-IT Solution</p></li>
    <li><p>Bachelor's in Computer Engineering with 8.67 CGPA.</p></li>
  </ul>
</div>

<h3>Skills</h3>

<div>
  <h4>Tools:</h4>
  <ul>
    <li>GitHub</li>
    <li>Visual Studio Code</li>
    <li>Postman</li>
    <li>Netlify</li>
    <li>Jira</li>
    <li>Docker</li>
    <li>Kubernetes</li>
    <li>AWS (Amazon Web Services)</li>
    <li>Azure</li>
  </ul>
</div>

<div>
  <h4>Programming Languages:</h4>
  <ul>
    <li>React.js</li>
    <li>Python</li>
    <li>Node.js</li>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</div>

<div>
  <h4>Database:</h4>
  <ul>
    <li>MongoDB</li>
    <li>SQL</li>
    <li>SQLite</li>
  </ul>
</div>

<div>
  <h4>Interpersonal Skills:</h4>
  <ul>
    <li>Communication</li>
    <li>Teamwork</li>
    <li>Problem-solving</li>
    <li>Adaptability</li>
  </ul>
</div>


<br></br>

<h3>Experience</h3>

<div>
  <h4>Software Developer | DgTroops | Bangalore, India</h4>
  <p>Jan 2022 – Mar 2022</p>
  <ul>
    <li>Developed and maintained robust web applications using the Django framework's Model-View-Template (MVT) architecture, adhering to best practices and coding standards, resulting in highly functional and scalable applications.</li>
    <li>Implemented database models, designed efficient database schemas, and optimized database queries for improved performance and data retrieval.</li>
    <li>Integrated third-party APIs, such as payment gateways and social media platforms, to enhance application functionality and user experience.</li>
  </ul>
</div>

<div>
  <h4>Web Developer Intern | Trevita InfoTech | Vadodara, India</h4>
  <p>Jan 2021 – Dec 2021</p>
  <ul>
    <li>Collaborated effectively with cross-functional internal teams, including designers, developers, and product managers, to gather end-user feedback and translate it into actionable improvements and enhanced solutions, resulting in increased user engagement and overall product success.</li>
    <li>Conducted proactive research to identify and explore new technological platforms, Agile framework, and languages such as Python and JavaScript. Stayed updated with industry trends and implemented innovative solutions, including REST APIs, to enhance application performance and functionality.</li>
    <li>Designed and configured robust NoSQL database and efficiently implemented back-end applications and programs, ensuring smooth data management, seamless integration between the front-end and back-end systems, and effective utilization of REST APIs.</li>
  </ul>
</div>

<br></br>
<h3>Education</h3>

<div>
  <h4>Cloud Computing | George Brown College | Toronto, ON</h4>
  <p>Jan 2023 – present</p>
  <ul>
    <li>Designed, developed, configured, troubleshot, maintained, and upgraded computing systems and network infrastructures for the cloud.</li>
    <li>Implemented enterprise-level applications in hosted cloud environments that respond to client needs and business practices.</li>
    <li>Designed and tested code-based solutions to cloud computing problems that ensure security.</li>
  </ul>
</div>
<div>
  <h4>Big Data Analysis | Georgian College | Barrie, ON</h4>
  <p>May 2022 – Dec 2022</p>
  <ul>
    <li>Distinguished member of university’s Accounting Society</li>
    <li>Collected, manipulated, and mined data sets to meet an organizational need.</li>
    <li>Accessed different systems architectures and data storage technologies to support data analytics.</li>
    <li>Applied business analytics and intelligence tools to support evidence-based decision-making.</li>
  </ul>
</div>

<div>
  <h4>Bachelors in Computer Science | Gujarat Technology University | Gujarat, India</h4>
  <p>2017 – 2021</p>
</div>
<br></br>

<h3>Certifications</h3>

<ul>
  <li>AZ-900: Microsoft Azure Fundamentals - Microsoft</li>
  <li>SQL (Intermediate) - Hacker Rank</li>
  <li>Python Data Structure - University of Michigan</li>
  <li>Programming for Everybody - University of Michigan</li>
  <li>Advanced React - Meta</li>
</ul>



</Container>


  );
}
export default About;
