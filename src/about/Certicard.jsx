import "../about/About.css";
import  Button  from "react-bootstrap/Button";


function Certicard(props) {
    return(
        <div className="certicard">
            <div className="certilogo">
                {props.name}
            </div>
            <div className="certitext">
                <div className="certilabel">
                    <h3>{props.label}</h3>
                </div>
                <div className="certidetail"> 
                    <p>{props.detail}</p>
                </div>
                <div className="downloadlink">
                    <a href ={props.link} target="_blank" rel="noreferrer"><Button>Verify Certificate</Button></a>
                </div>
            </div>
      </div>
    );
}


export default Certicard;