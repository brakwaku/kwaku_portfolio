import askasImage from '../../assets/askas.jpg';
import '../../styles/components/projects/askas.css';

const Askas = () => {
  return (
    <div className='main_project_content_wrapper'>
      <div className='project_description_wrapper'>
        <p>
          A web application used by a supervisor and his subordinates to keep
          track of the hours worked and the tasks they worked on. This
          application was developed because the supervisor had to create an
          excel document every week and provide a link for the subordinates to
          enter their hours worked and what they worked on. The application uses
          technologies such as Node / Express Js, JavaScript, Custom CSS,
          Bootstrap, EJS and Database (MongoDB).
        </p>
        <div className='project_icons_wrapper'>
          {/* <div className='each_project_icon'><a href="https://byuibroadcastaudio.cyclic.app" target="_blank" rel="noreferrer"><img src={live} alt="byuibroadcastaudio"/></a></div> */}
          {/* <div className='each_project_icon'><a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank" rel="noreferrer"><img src={source} alt="byuibroadcastaudio Github"/></a></div> */}
        </div>
      </div>
      <div className='project_image_container_wrapper'>
        <a
          href='https://byuibroadcastaudio.cyclic.app'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={askasImage}
            alt='ASKAS Project'
            className='project_image_wrapper'
          />
        </a>
      </div>
    </div>
  );
};

export default Askas;
