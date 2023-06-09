import { Container } from "react-bootstrap";
import "./Projects.css"
import Porjectcard from "./Porjectcard";

import Projectsdict from "./Projectsdict";

function Projects() {
    return (
      <Container>
      <div className="Projects">
      <div className="letest_work_text">Letest Work</div>
      
      <div className="cards-main">
  {Projectsdict.map((project, index) => (
    <Porjectcard
      name={project.name}
      description={project.description}
      img={project.image}

    />
  ))}
  
</div>
      </div>

      </Container>

    );
  }
  
  export default Projects;
  