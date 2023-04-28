import "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/about/About.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about_img_1 from "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/resources/about_img_1.png";
import call_logo from "/Users/nishvaria/NISH/Nishportfolio/portfolio/src/resources/call.png";

function About() {

  return (
    <div className="div_main">
    {/* just to make the div parent componant. To add the background color on the whole page. */}
      <Container >
        <Row className="img_section">
          <Col>
            <Row>
              <Col>
                  <img
                    className="Profile_img"
                    src={about_img_1} alt="Nish's Profile"
                  />
              </Col>
              <Col className="role_title">
                <h1><text>Business Analyst & Developer</text></h1>
                <br></br>
                <h3 className="about_me"><text>About Me</text></h3>
                <p className="about_me_p">I am an kuhrefkuer kearfgukeruf eiruhf iruehfieruhf 
                  eirhfeirhfierhf efiaruhiua iruehafiuhreafaieuhf efh ieahrh feiauheiahah fiahiah fih
                askjdfnkjsanfjkndsjknfjkds  
                dsfdsfdsfdsfjkdhgsfgkjshgafkhjsagfkhjgffguerygfruef  jgj gj gj gj g jg jg jg jhg d
                efiuygefg gfoeuifgeufgoewf7gbbwck wehfiuferiufhibvbvqleiu
                </p>
              </Col>
           </Row>
            <Row className="about_me_row2">
              <Col>
              <div>
                <img  className="logo_section" src={call_logo} alt="call logo"/>
                <p>+1 &05. 770. 0631</p>
                </div>
              </Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
        </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default About;

