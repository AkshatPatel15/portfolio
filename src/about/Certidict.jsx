import { FaReact } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faGoogle,faLinkedinIn, faJava, faJira, faPython, faAndroid, faGithub, faBitcoin} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


const Certidict = [

    { 
        certilogo:<FontAwesomeIcon icon={faLinkedinIn} size="3x"></FontAwesomeIcon>,
        certilabel:"Excel",
        certidetail:"Enhanced the knowledge of the excel software by performing the various challenging tasks",
        certilink:"Verify Certificate",
    },
    {
        certilogo:<FontAwesomeIcon icon={faGoogle} size="3x"/>,
        certilabel:"Agile Metholodgy",
        certidetail:"this is the detail of the certificate",
        certilink:<FontAwesomeIcon icon={faArrowDown} size="lg" ></FontAwesomeIcon>,
    },

]


export default Certidict;