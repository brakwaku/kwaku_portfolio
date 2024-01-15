import ananses3mImage from '../../assets/ananses3m.jpg';

const Ananses3m = () => {
  return (
    <div className='main_project_content_wrapper'>
      <div className='project_description_wrapper'>
        <p>
          An eCommerce single page web application for selling goods and
          services. This application uses the MVC patern of development. Users
          are able to see listed products based on categories. They are also
          able to search for products by name or category. It enforces user
          authorization and authentication. Administrators are able to perforn
          CRUD actions on products. The application uses technologies such as
          Node / Express Js, JavaScript, Custom CSS, Bootstrap, React and a
          Database (MongoDB).
        </p>
        <div className='project_icons_wrapper'>
          {/* <div className='each_project_icon'><a href="https://byuibroadcastaudio.cyclic.app" target="_blank" rel="noreferrer"><img src={live} alt="byuibroadcastaudio"/></a></div> */}
          {/* <div className='each_project_icon'><a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank" rel="noreferrer"><img src={source} alt="byuibroadcastaudio Github"/></a></div> */}
        </div>
        <i class="fa fa-light fa-chevron-right"></i>
      </div>
      <div className='project_image_container_wrapper'>
        <a href='https://ananses3m.cyclic.app' target='_blank' rel='noreferrer'>
          <img
            src={ananses3mImage}
            alt='ASKAS Project'
            className='project_image_wrapper'
          />
        </a>
      </div>
    </div>
  );
};

export default Ananses3m;
