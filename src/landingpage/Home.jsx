import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
    return (
      <div className="HomePage">
        <div className="text_div">
         <span className="hi_text">Hi,</span><br></br> 
         <span className="i_am_text">I am 
         <span className="akshat_patel_text"> Akshat Patel</span></span><br></br>        
           <span className="software_developer_text">Software Developer</span>
           <div className="btn_contact"><Button variant="dark">Contact</Button></div>

</div>
    </div>
      );
}

export default Home;




