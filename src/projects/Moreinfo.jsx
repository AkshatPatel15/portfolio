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
      {Object.keys(project.tools).map((key) => (
  <div className="tool-item">
    {project.tools[key]}
    <span className="tool-name">{key}</span>
  </div>
))}
        <div className="know-more-links">
          {Object.keys(project.links).map((key) => (
            <a
              className="know-more-link"
              href={project.links[key]}
              target="_blank"
              rel="noreferrer"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
      {/* <div>
        <h1>Movies</h1>
<p>Movies" is a web-based project developed using React, Flask, and API fetching from IMDb. The project aims to provide users with a comprehensive platform to search and explore movies, TV shows, and other cinematic content. The application integrates with IMDb's extensive database, allowing users to access information on thousands of movies and TV shows.

The front-end of the project is built using React, a popular JavaScript library for building user interfaces. The UI is designed to be intuitive and user-friendly, featuring a responsive design that adapts to different screen sizes. Users can search for movies by title, director, or actor, and filter results by genre, release date, and ratings.

The back-end of the project is built using Flask, a Python web framework that provides a robust set of tools for building web applications. Flask handles the API calls to IMDb, which provide the project with the necessary data to populate the front-end. The application stores user preferences and search history, providing a personalized experience to each user.

Overall, "Movies" is an impressive project that leverages cutting-edge web technologies to provide users with a comprehensive platform for exploring movies and TV shows. Its intuitive UI, extensive database, and personalized features make it a standout application in the world of movie-related web apps.</p>
      </div>
      <img src={movies} alt="movies"></img>
      <h6>
        Tools used to develop this project
      </h6>
      <div>
        <FaReact></FaReact>
        <BsBootstrap></BsBootstrap>
        <TbBrandPython></TbBrandPython>
        <TbBrandJavascript></TbBrandJavascript>
        <AiOutlineHtml5></AiOutlineHtml5>
        <p>NLTK</p>
      </div> */}
      </Container>
    );
  }
  
  export default Moreinfo;