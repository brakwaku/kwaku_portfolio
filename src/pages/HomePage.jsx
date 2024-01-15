import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/pages/home.css';
import { motion } from 'framer-motion';
import CompanyBox from '../components/CompanyBox';
import Projects from '../components/Projects';

import ibmLogo from '../assets/ibm.png';
import flexsimLogo from '../assets/flexsim.png';
import byuiLogo from '../assets/byui.webp';
import buildingfitLogo from '../assets/bf.png';
import ldsLogo from '../assets/lds.png';
import profile from '../assets/profile.png';

import reactLogo from '../assets/react.png';
import gqlLogo from '../assets/gql.png';
import nodeLogo from '../assets/node.png';
import mongoLogo from '../assets/mongo.png';
import laraLogo from '../assets/lara.png';
import twLogo from '../assets/tw.png';
import phpLogo from '../assets/php.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import gitLogo from '../assets/git.png';
import javaLogo from '../assets/java.png';
import wpLogo from '../assets/wp.png';
import jqLogo from '../assets/jq.png';
import jsLogo from '../assets/js.png';
import csharpLogo from '../assets/csharp.png';
import sqlLogo from '../assets/sql.png';
import cppLogo from '../assets/cpp.png';

const HomePage = () => {
  const ibmArr = [reactLogo, gqlLogo, nodeLogo];
  const fsArr = [phpLogo, laraLogo, twLogo, gitLogo];
  const ldsArr = [reactLogo, javaLogo, htmlLogo];
  const bfArr = [wpLogo, jqLogo, htmlLogo, cssLogo];
  const byuiArr = [reactLogo, mongoLogo, nodeLogo];
  const profileArr = [jsLogo, csharpLogo, sqlLogo, cppLogo];

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    // hidden: { opacity: 0, x: -100 },
    // visible: { opacity: 1, x: 0 }
  };

  return (
    <Container>
      <div className='announcer'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={leftVariant}
          transition={{ duration: 0.5 }}
        >
          <NavLink to='/designer' className='remove_deco'>
            <h2>I Design 🖌️</h2>
          </NavLink>
        </motion.div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={rightVariant}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavLink to='/developer' className='remove_deco'>
            <h2>&lt; I Code &gt;</h2>
          </NavLink>
        </motion.div>
      </div>

      <div className='main-grid mt-4'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <NavLink to='/ibm'>
            <CompanyBox
              trimer
              companyImage={ibmLogo}
              borderColor='#1e6fc169'
              companyName='IBM'
              toolArr={ibmArr}
            />
          </NavLink>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <NavLink to='/flexsim'>
            <CompanyBox
              companyImage={flexsimLogo}
              borderColor='#c0a16e62'
              companyName='Flexsim'
              width='80%'
              toolArr={fsArr}
            />
          </NavLink>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <NavLink to='/thechurchofjesuschristoflatterdaysaints'>
            <CompanyBox
              trimer
              companyImage={ldsLogo}
              borderColor='#3a607c6a'
              companyName='Church of Jesus Christ of Latter-Day Saints'
              toolArr={ldsArr}
            />
          </NavLink>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <NavLink to='/buildingfit'>
            <CompanyBox
              companyImage={buildingfitLogo}
              borderColor='#4d8fcc67'
              companyName='Buildingfit'
              backgroundColor='whitesmoke'
              width='80%'
              toolArr={bfArr}
            />
          </NavLink>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <NavLink to='/byui'>
            <CompanyBox
              trimer
              companyImage={byuiLogo}
              borderColor='#0768b26a'
              companyName='BYU-I'
              backgroundColor='#e9ecef'
              width='50%'
              toolArr={byuiArr}
            />
          </NavLink>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <NavLink to='/about-me'>
            <CompanyBox
              companyImage={profile}
              borderColor='#b3670a6f'
              companyName='Kwaku Appau-Nkansah'
              // backgroundColor='#f6eee6'
              width='55%'
              toolArr={profileArr}
            />
          </NavLink>
        </motion.div>
      </div>
      <div className='home_bottom'>
        <Projects />
      </div>
    </Container>
  );
};

export default HomePage;
