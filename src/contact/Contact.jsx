import github from '../resources/github.svg'
import facebook from '../resources/facebook.svg'
import linkedIn from '../resources/linkedin.svg'
import instagram from '../resources/instagram.svg'
import youtube from '../resources/youtube.svg'
import twitter from '../resources/twitter.svg'
import { Button, Container } from 'react-bootstrap'
import './Contact.css'
import { Link } from 'react-router-dom'


export default function Contact(){
    return(
        <Container>
      <main>
        <div className="title">Contact me</div>
        <div className="title-info">I'll get back to you soon!</div>

        <form action="" method="" className="form">
          <div className="input-group">
            <input type="text" name="first_name" id="first-name" placeholder="First name" />
            <label htmlFor="first-name">First name</label>
          </div>

          <div className="input-group">
            <input type="text" name="last_name" id="last-name" placeholder="Last Name" />
            <label htmlFor="last-name">Last name</label>
          </div>

          <div className="input-group">
            <input type="email" name="e-mail" id="e-mail" placeholder="e-mail" />
            <label htmlFor="e-mail">e-mail</label>
          </div>

          <div className="textarea-group">
            <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <div className="button-div">
          <Button className='button_navbarheader' variant="dark">Send</Button>

          </div>
        </form>
      </main>

      <footer>
        <Link to="#" target="_blank"><img className="social-media-img" src={facebook} alt="Facebook" /></Link>
        <Link to="#" target="_blank"><img className="social-media-img" src={github} alt="GitHub" /></Link>
        <Link to="#" target="_blank"><img className="social-media-img" src={instagram} alt="Instagram" /></Link>
        <Link to="#" target="_blank"><img className="social-media-img" src={linkedIn} alt="LinkedIn" /></Link>
        <Link to="#" target="_blank"><img className="social-media-img" src={twitter} alt="Twitter" /></Link>
        <Link to="#" target="_blank"><img className="social-media-img" src={youtube} alt="YouTube" /></Link>
      </footer>
    </Container>
    )
}
