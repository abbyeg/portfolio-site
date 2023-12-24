import PropTypes from 'prop-types';

const TextContent = ({ children }) => {
  return (
    <div className="fade-load mt-40 ml-14 mr-14 sm:ml-32 sm:mr-32 lg:ml-56 lg:mr-56 mb-10">
      {children}
    </div>
  );
};

TextContent.propTypes = {
  children: PropTypes.children,
};


export default TextContent;
