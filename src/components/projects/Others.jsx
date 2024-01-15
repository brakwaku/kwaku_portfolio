import source from '../../assets/source.png';
import '../../styles/components/projects/others.css';

const Others = () => {
  return (
    <div className='outter_wrapper'>
      <div className='main_other_project_wrapper'>
        <div className='project_icon_wrapper'>
          <div className='each_project_icon'>
            <a
              href='https://github.com/brakwaku/CSharp-Sacrament-Meeting-Planner'
              target='_blank'
              rel='noreferrer'
            >
              <img src={source} alt='Github Repo' />
            </a>
          </div>
          <h4 className='project_title'>Meeting Planner</h4>
        </div>
        <div>
          <p>
            Collaborated with another developer to build a web application using
            the .NETCore and C#. The application follows the MVC pattern of
            development. Data is stored in a MySQL database which is queried and
            served to the user based on the parameters passed to the backend.
          </p>
          <div className='technologies_wrapper'>
            <p>C#</p>
            <p>Linq Queries</p>
          </div>
        </div>
      </div>

      <div className='main_other_project_wrapper'>
        <div className='project_icon_wrapper'>
          <div className='each_project_icon'>
            <a
              href='https://github.com/brakwaku/react-interface'
              target='_blank'
              rel='noreferrer'
            >
              <img src={source} alt='Github Repo' />
            </a>
          </div>
          <h4 className='project_title'>Appointments Organizer</h4>
        </div>
        <div>
          <p>
            A web application that is used to set appointments for an animal
            doctor. The application collects information such as the name of the
            animal, the name of its ownwer, time of the appointment and date of
            the appointment. Appointments can be created, deleted, sorted and
            searched on the fly. The application uses technologies such as Node
            / Express Js, Custom CSS, Bootstrap, and React Js.
          </p>
          <div className='technologies_wrapper'>
            <p>Node Js</p>
            <p>React Js</p>
            <p>CSS</p>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>

      <div className='main_other_project_wrapper'>
        <div className='project_icon_wrapper'>
          <div className='each_project_icon'>
            <a
              href='https://github.com/brakwaku/house-year_predict'
              target='_blank'
              rel='noreferrer'
            >
              <img src={source} alt='Github Repo' />
            </a>
          </div>
          <h4 className='project_title'>Year Predictor</h4>
        </div>
        <div>
          <p>
            A machine learning model that predicts the year a house was built
            based on some variables provided by the data. It also looks at some
            possible relationships between the various variables. The model uses
            python libraries such as pandas, numpy, seaborn, altair and sklearn.
          </p>
          <div className='technologies_wrapper'>
            <p>Python</p>
            <p>Pandas</p>
            <p>Seaborn</p>
            <p>Sklearn</p>
            <p>Numpy</p>
          </div>
        </div>
      </div>

      <div className='main_other_project_wrapper'>
        <div className='project_icons_wrapper'>
          <div className='each_project_icon'>
            <a
              href='https://github.com/brakwaku/Gradient-preview'
              target='_blank'
              rel='noreferrer'
            >
              <img src={source} alt='Github Repo' />
            </a>
          </div>
          <h4 className='project_title'>Gradient Preview</h4>
        </div>
        <div>
          <p>
            A simple web page that helps designers have a quick preview of a
            two-color gradient. This serves as a tool to help designers get a
            visual representation of a gradient idea before actually applying
            it.
          </p>
          <div className='technologies_wrapper'>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
