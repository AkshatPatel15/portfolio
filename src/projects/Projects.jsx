import { Container } from "react-bootstrap";
import  Card  from "./Card";
import "./Projects.css"

function Projects() {
    return (
      <Container>
      <div className="Projects">
      <div className="letest_work_text">Letest Work</div>
      <div>
        <Card></Card>
      </div>
      </div>
      </Container>

    );
  }
  
export default  Projects;