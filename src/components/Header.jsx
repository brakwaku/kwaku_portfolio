import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import myResume from '../assets/resume.pdf';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={navbarVariant}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Navbar bg='primary' variant='dark' expand='md' id='header'>
        <Container>
          <NavLink to='/'>
            <Navbar.Brand>Kwaku Appau-Nkansah</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle
            onClick={toggleMenu}
            aria-controls='basic-navbar-nav'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <AnimatePresence>
                {isMenuOpen ? (
                  <>
                    <motion.div
                      custom={0}
                      variants={menuItemVariants}
                      initial='hidden'
                      animate='visible'
                      exit='hidden'
                    >
                      <Nav.Link
                        href={myResume}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Resume
                      </Nav.Link>
                    </motion.div>
                    <motion.div
                      custom={1}
                      variants={menuItemVariants}
                      initial='hidden'
                      animate='visible'
                      exit='hidden'
                    >
                      <NavLink to='/projects'>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                      </NavLink>
                    </motion.div>
                    <motion.div
                      custom={2}
                      variants={menuItemVariants}
                      initial='hidden'
                      animate='visible'
                      exit='hidden'
                    >
                      <NavLink to='/contact'>
                        <Nav.Link href='#footer'>Contact</Nav.Link>
                      </NavLink>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <Nav.Link href={myResume} target='_blank' rel='noreferrer'>
                      Resume
                    </Nav.Link>
                    <NavLink to='/projects'>
                      <Nav.Link href='#projects'>Projects</Nav.Link>
                    </NavLink>
                    <NavLink to='/contact'>
                      <Nav.Link href='#footer'>Contact</Nav.Link>
                    </NavLink>
                  </>
                )}
              </AnimatePresence>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
    // <motion.div
    //   initial='hidden'
    //   animate='visible'
    //   variants={navbarVariant}
    //   transition={{ duration: 0.7, ease: 'easeOut' }}
    // >
    //   <Navbar bg='primary' variant={'dark'} expand='md' id='header'>
    //     <Container>
    //       <NavLink to='/'>
    //         <Navbar.Brand>Kwaku Appau-Nkansah</Navbar.Brand>
    //       </NavLink>
    //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //       <Navbar.Collapse id='basic-navbar-nav'>
    //         <Nav className='ms-auto'>
    //           <Nav.Link href={myResume} target='_blank' rel='noreferrer'>
    //             Resume
    //           </Nav.Link>
    //           <NavLink to='/projects'>
    //             <Nav.Link href='#projects'>Projects</Nav.Link>
    //           </NavLink>
    //           <NavLink to='/contact'>
    //             <Nav.Link href='#footer'>Contact</Nav.Link>
    //           </NavLink>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </motion.div>
  );
};

export default Header;
