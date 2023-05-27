import {  Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
    return (
  
      <div className="HomePage">    
        <Container>
          <div className="text_div">
          <span className="hi_text">Hi,</span><br></br> 
          <span className="i_am_text">I am 
          <span className="akshat_patel_text"> Nish Varia </span></span><br></br>        
            <span className="software_developer_text">Business Analyst</span>
            {/* <div className="btn_contact"><Button variant="dark">Contact</Button></div> */}
          </div>
        </Container>
    </div>
      );
}

export default Home;




