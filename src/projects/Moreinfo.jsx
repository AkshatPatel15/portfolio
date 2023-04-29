import { Container } from "react-bootstrap";
import "./Projects.css"
import movies from '../resources/netflix.png';
import {FaReact} from 'react-icons/fa'
import {BsBootstrap} from 'react-icons/bs';
import {TbBrandPython} from 'react-icons/tb';
import {TbBrandJavascript} from 'react-icons/tb';

import {AiOutlineHtml5} from 'react-icons/ai';



function Moreinfo() {
    return (
        <Container>
      <div>
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
      </div>
      </Container>
    );
  }
  
  export default Moreinfo;