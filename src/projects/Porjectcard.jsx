import { Button, Card } from "react-bootstrap";
import "./Projects.css"
import Moreinfo from "./Moreinfo";


function Porjectcard(props) {
    return (
      <div className="m-5">
      <Card className="card-main" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className="btn_contact"><Button variant="dark">Know More</Button></div>
      </Card.Body>
    </Card>
</div>
    );
  }
  
  export default Porjectcard;
  