import { Button, Card, ListGroup } from "react-bootstrap";
import "./Projects.css"



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
        <div className="btn_contact"><Button variant="dark" href={props.link1}>{props.link1name}</Button></div>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card></div>
    );
  }
  
  export default Porjectcard;
  