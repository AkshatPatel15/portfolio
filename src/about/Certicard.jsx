import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../about/About.css";
import { Button } from "bootstrap";


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
                    <Button>Verify Certificate</Button>
                </div>
            </div>
      </div>
    );
}


export default Certicard;