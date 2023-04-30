import "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/about/About.css"

import { IoLogoLinkedin,IoIosMail,IoIosPhonePortrait, IoLogoGithub } from "react-icons/io";


function Skillscard(props) {
return(
    <div> 
        <div className="subdiv3">
            <div>
                {props.tag}<h5>{props.name}</h5></div>
            </div>
    </div>
);
}


export default Skillscard;