import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import myResume from '../assets/resume.pdf';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <div className='footer_container'>
      <nav className='back_to_top_container'>
        <ul className='back_to_top'>
          <li>
            <a href='#header'>
              <span className='icon-home'></span>
              <span className='screen-reader-text'><i className="fa fa-solid fa-chevron-up"></i></span>
            </a>
          </li>
        </ul>
      </nav>
      <Navbar bg='' variant={'dark'} expand='md' style={{ height: '60px' }}>
        <Container>
          <p id='watermark'>© 2020 - Kwaku Appau-Nkansah</p>
          <Nav className='ms-auto footer_nav'>
            <Nav.Link
              className='footer_nav_items'
              href={myResume}
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </Nav.Link>
            <NavLink className='footer_nav_items' to='/projects'>
              <Nav.Link className='footer_nav_items' href='/projects'>
                Projects
              </Nav.Link>
            </NavLink>
            <NavLink className='footer_nav_items' to='/contact'>
              <Nav.Link className='footer_nav_items' href='#footer'>
                Contact
              </Nav.Link>
            </NavLink>
            <Nav.Link
              href='https://www.linkedin.com/in/theophilus-kwaku-appau-nkansah-b57393a2'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-linkedin fa-inverse'></i>
            </Nav.Link>
            <Nav.Link
              href='https://github.com/brakwaku'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-github fa-inverse'></i>
            </Nav.Link>
            <Nav.Link href='mailto:brakwakujr@gmail.com'>
              <i className='fa fa-paper-plane fa-inverse'></i>
            </Nav.Link>
            {/* <a
            href='https://www.facebook.com/brakwakumusic'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-facebook fa-inverse'></i>
          </a> */}
            {/* <a
            href='https://www.facebook.com/brakwakumusic'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-instagram fa-inverse'></i>
          </a> */}
            {/* <a
            href='https://open.spotify.com/artist/6Bu0ogVJIM6VB20GXQkmh9'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-spotify fa-inverse'></i>
          </a> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
