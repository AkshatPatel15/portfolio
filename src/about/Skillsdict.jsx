// import { FaReact } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faGoogle,faLinkedinIn, faJava, faJira, faPython, faAndroid, faGithub, faBitcoin} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



const Skillsdict = [
    {
        skillname: "Reactjs",
        logo:<FontAwesomeIcon icon={faReact} flip size="3x" />,
    },
    {
        skillname: "JAVA",
        logo:<FontAwesomeIcon icon={faJava} flip size='3x' />,
    },
    {
        skillname: "JIRA",
        logo:<FontAwesomeIcon icon={faJira} flip size='3x' />,
       
    },
    {
        skillname: "Python",
        logo:<FontAwesomeIcon icon={faPython} flip size='3x' />,
    },
    {
        skillname: "SQL",
        logo:<FontAwesomeIcon icon={faDatabase} flip size='3x' />,
    },
    {
        skillname: "Android Development",
        logo:<FontAwesomeIcon icon={faAndroid} flip size='3x' />,
    },
    {
        skillname: "Github",
        logo:<FontAwesomeIcon icon={faGithub} flip size='3x' />,
    },
    {
        skillname: "Bitcoin",
        logo:<FontAwesomeIcon icon={faBitcoin} flip size='3x' />,
    },
    
];


export default Skillsdict;