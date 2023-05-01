import "./About.css"




function Skillscard(props) {
return(
    <div> 
         <div className="skillcard">
           <div className="logo">{props.logo}</div><h5 className="skillname">{props.name}</h5> 
         </div>
    </div>
);
}


export default Skillscard;