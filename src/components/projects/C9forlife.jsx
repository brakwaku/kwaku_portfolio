import c9forlifeImage from '../../assets/c9forlife.jpg'

const C9forlife = () => {
  return (
    <div className='main_project_content_wrapper'>
      <div className='project_description_wrapper'>
        <p>
          A web application that serves as an environment for people who have
          any form of depression, PTSD, victims of abuse or trauma to interact
          with an administrator who cordinates activities. Users of the app are
          able to take and complete tasks as they get rewarded. They can also
          suggest activities that can be added by the administrator so that
          others can perform it too. The application uses technologies such as
          Node / Express Js, JavaScript, Custom CSS, Bootstrap, EJS and Database
          (MongoDB).
        </p>
        <div className='project_icons_wrapper'>
          {/* <div className='each_project_icon'><a href="https://byuibroadcastaudio.cyclic.app" target="_blank" rel="noreferrer"><img src={live} alt="byuibroadcastaudio"/></a></div> */}
          {/* <div className='each_project_icon'><a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank" rel="noreferrer"><img src={source} alt="byuibroadcastaudio Github"/></a></div> */}
        </div>
        <i class="fa fa-light fa-chevron-right"></i>
      </div>
      <div className='project_image_container_wrapper'>
        <a href='https://c9forlife.cyclic.app' target='_blank' rel='noreferrer'>
          <img
            src={c9forlifeImage}
            alt='C9 For Life Project'
            className='project_image_wrapper'
          />
        </a>
      </div>
    </div>
  );
};

export default C9forlife;
