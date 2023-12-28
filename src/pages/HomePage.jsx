import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/home.css';
import CompanyBox from '../components/CompanyBox';
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
  return (
    <Container>
      <div className="announcer">
        <h2>I Design 🖌️</h2>
        <h2>&lt; I Code &gt;</h2>
      </div>
      <div className='main-grid mt-4'>
        <NavLink to='/ibm'>
          <CompanyBox
            trimer
            companyImage={ibmLogo}
            borderColor='#1e6fc169'
            companyName='IBM'
            toolArr={ibmArr}
          />
        </NavLink>
        <NavLink to='/flexsim'>
          <CompanyBox
            companyImage={flexsimLogo}
            borderColor='#c0a16e62'
            companyName='Flexsim'
            width='80%'
            toolArr={fsArr}
          />
        </NavLink>
        <NavLink to='/thechurchofjesuschristoflatterdaysaints'>
          <CompanyBox
            trimer
            companyImage={ldsLogo}
            borderColor='#3a607c6a'
            companyName='Church of Jesus Christ of Latter-Day Saints'
            toolArr={ldsArr}
          />
        </NavLink>
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
      </div>
      <div className="home_bottom"></div>
    </Container>
  );
};

export default HomePage;
