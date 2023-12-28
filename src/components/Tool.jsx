import '../styles/tool.css';

const Tool = ({ toolImg }) => {
  const dynamicStyles = {
    '--background-image': `url(${toolImg})`,
  };
  return (
    <div className='tool_icon_container'>
      <div className='tool_icon' style={dynamicStyles} />
    </div>
  );
};

export default Tool;
