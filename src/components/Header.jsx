import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import myResume from '../assets/resume.pdf';

const Header = () => {
  return (
    <Navbar
      bg='primary'
      variant={'dark'}
      expand='md'
      id='header'
    //   style={{ height: '60px' }}
    >
      <Container>
        <NavLink to='/'>
          <Navbar.Brand>Kwaku Appau-Nkansah</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href={myResume} target='_blank' rel='noreferrer'>
              Resume
            </Nav.Link>
            <NavLink to='/projects'>
              <Nav.Link href='#projects'>Projects</Nav.Link>
            </NavLink>
            <NavLink to='/contact'>
              <Nav.Link href='#footer'>Contact</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
