import { Tab, Tabs } from 'react-bootstrap';
import '../styles/components/projects.css';

import Askas from './projects/Askas';
import Ananses3m from './projects/Ananses3m';
import C9forlife from './projects/C9forlife';
import EquipMe from './projects/EquipMe';
import Others from './projects/Others';

const Projects = () => {
  return (
    <div id='projects' className='projects_main_wrapper'>
      <h2 className='projects_title'>Projects</h2>
      <div>
        <Tabs defaultActiveKey='askas' className='mb-3'>
          <Tab eventKey='askas' title='ASKAS'>
            <Askas />
          </Tab>
          <Tab eventKey='anansesɛm' title='Anansesɛm'>
            <Ananses3m />
          </Tab>
          <Tab eventKey='c9forlife' title='C9forlife'>
            <C9forlife />
          </Tab>
          <Tab eventKey='equipMe' title='EquipMe'>
            <EquipMe />
          </Tab>
          <Tab eventKey='otherProjects' title='Others'>
            <Others />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
