import { Container } from "react-bootstrap";
import "./Projects.css"
import Porjectcard from "./Porjectcard";

function Projects() {
    return (
      <Container>
      <div className="Projects">
      <div className="letest_work_text">Letest Work</div>
      <div>
        <Porjectcard></Porjectcard>
      </div>
      </div>
      </Container>

    );
  }
  
  export default Projects;
  