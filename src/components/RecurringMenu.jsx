import { useLocation, useNavigate } from 'react-router-dom';
import ibmBackground from '../assets/ibmcloud.jpeg';
import fsBackground from '../assets/flex.jpeg';
import ldsBackground from '../assets/mishdep.jpeg';
import bfBackground from '../assets/buildingfit.jpg';
import byuiBackground from '../assets/mixingboard.jpg';
import meBackground from '../assets/me.jpg';
import defaultBackground from '../assets/bg.png';
import '../styles/components/recurringMenu.css';

const RecurringMenu = () => {
  const location = useLocation();
  const pathNameq = location.pathname;

  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault();

    const onScroll = () => {
      if (window.pageYOffset === 0) {
        window.removeEventListener('scroll', onScroll);
        navigate(path);
      }
    };

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    window.addEventListener('scroll', onScroll);
  };

  const backgroundImages = {
    '/ibm': ibmBackground,
    '/flexsim': fsBackground,
    '/thechurchofjesuschristoflatterdaysaints': ldsBackground,
    '/buildingfit': bfBackground,
    '/byui': byuiBackground,
    '/about-me': meBackground,
    default: defaultBackground,
  };

  const backgroundImageUrl =
    backgroundImages[pathNameq] || backgroundImages['default'];

  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='recurring_menu_container' style={containerStyle}>
      <ul className='recurring_menu_items'>
        <div className={`${pathNameq === '/ibm' ? 'path_selected' : ''}`}>
          <li>
            <a href='/ibm' onClick={(e) => handleNavigation(e, '/ibm')}>
              <h2>IBM</h2>
            </a>
          </li>
        </div>
        <div className={`${pathNameq === '/flexsim' ? 'path_selected' : ''}`}>
          <li>
            <a href='/flexsim' onClick={(e) => handleNavigation(e, '/flexsim')}>
              <h2>FlexSim</h2>
            </a>
          </li>
        </div>
        <div
          className={`${
            pathNameq === '/thechurchofjesuschristoflatterdaysaints'
              ? 'path_selected'
              : ''
          }`}
        >
          <li>
            <a
              href='/thechurchofjesuschristoflatterdaysaints'
              onClick={(e) =>
                handleNavigation(e, '/thechurchofjesuschristoflatterdaysaints')
              }
            >
              <h2>LDS Church</h2>
            </a>
          </li>
        </div>
        <div
          className={`${pathNameq === '/buildingfit' ? 'path_selected' : ''}`}
        >
          <li>
            <a
              href='/buildingfit'
              onClick={(e) => handleNavigation(e, '/buildingfit')}
            >
              <h2>BuildingFit</h2>
            </a>
          </li>
        </div>
        <div className={`${pathNameq === '/byui' ? 'path_selected' : ''}`}>
          <li>
            <a href='/byui' onClick={(e) => handleNavigation(e, '/byui')}>
              <h2>BYU-I</h2>
            </a>
          </li>
        </div>
        <div className={`${pathNameq === '/about-me' ? 'path_selected' : ''}`}>
          <li>
            <a
              href='/about-me'
              onClick={(e) => handleNavigation(e, '/about-me')}
            >
              <h2>Gem Kwaku</h2>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default RecurringMenu;
