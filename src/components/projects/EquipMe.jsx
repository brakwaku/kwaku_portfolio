import equipMeImage from '../../assets/equipme.jpg';

const EquipMe = () => {
  return (
    <div className='main_project_content_wrapper'>
      <div className='project_description_wrapper'>
        <p>
          Collaborative work with two other developers. This is an android
          application written in Java. The application tracks inventory of
          company tools and employees. Users are able to add tools and assign
          them to employees.
        </p>
        <div className='project_icons_wrapper'>
          {/* <div className='each_project_icon'><a href="https://byuibroadcastaudio.cyclic.app" target="_blank" rel="noreferrer"><img src={live} alt="byuibroadcastaudio"/></a></div> */}
          {/* <div className='each_project_icon'><a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank" rel="noreferrer"><img src={source} alt="byuibroadcastaudio Github"/></a></div> */}
        </div>
      </div>
      <div className='project_image_container_wrapper'>
        <a href='https://github.com/brakwaku/equip-me' target='_blank' rel='noreferrer'>
          <img
            src={equipMeImage}
            alt='EquidMe Project'
            className='project_image_wrapper'
          />
        </a>
      </div>
    </div>
  );
};

export default EquipMe;
