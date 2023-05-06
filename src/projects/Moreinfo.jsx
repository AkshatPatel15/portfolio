import { Container } from "react-bootstrap";
import "./Projects.css"

import { useParams } from "react-router-dom";
import Projectsdict from "./Projectsdict";



function Moreinfo() {

  const { id } = useParams();
  const project = Projectsdict.find((proj) => proj.name === id);
  console.log(project)
    return (
      
        <Container>
          <div className="know-more-container">
      <div className="know-more-card">
        <h2 className="know-more-title">{project.name}</h2>
        <img className="know-more-img" src={project.image} alt="project" />
        <p className="know-more-description">{project.description}</p>

        {Object.keys(project.dl).map((key) => (
        <div className="dl-item">
          <p className="dl-description">{project.dl[key]}</p>

        </div>
      ))}
      <h3>Tools </h3>

      {Object.keys(project.tools).map((key) => (
  <div className="tool-item">
    {project.tools[key]}
    <span className="tool-name">{key}</span>
  </div>
))}
      </div>
    </div>
      
      </Container>
    );
  }
  
  export default Moreinfo;