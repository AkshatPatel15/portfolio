import Navbarheader from "../Navbarheader";
import Button from 'react-bootstrap/Button';
import './css/Home.css'

// or less ideally
const Home = () => {
    return(
<> 
<div className="App">
      <Navbarheader className = "Navbarheader"/>
      <div className="hero">
        <h1>Welcome to my landing page</h1>
      </div>
    </div>


</>
    )
}

export default Home