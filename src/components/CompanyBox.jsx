import Tool from './Tool';
import '../styles/company_box.css';

const CompanyBox = ({
  trimer,
  companyImage,
  companyName,
  backgroundColor,
  borderColor,
  width,
  imageFillType,
  toolArr,
}) => {
  const dynamicStyles = {
    '--background-color': backgroundColor || 'whitesmoke',
    '--hover-border-color': borderColor,
  };

  const dynamicBoxStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  };

  const dynamicImgStyles = {
    width: width || '60%',
    objectFit: imageFillType || 'contain',
  };

  return (
    <div
      className={`${trimer ? 'company_holder_trimmed' : 'company_holder'}`}
      style={dynamicStyles}
    >
      <div className='splash' style={dynamicBoxStyles}>
        <img
          src={companyImage}
          alt={`${companyName} logo`}
          style={dynamicImgStyles}
        />
      </div>
      <div className='tools_container'>
        {toolArr?.map((tool, index) => (
          <Tool key={index} toolImg={tool} />
        ))}
      </div>
    </div>
  );
};

export default CompanyBox;
