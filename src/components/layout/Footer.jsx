import PropTypes from 'prop-types';

const Socials = ({ filterWhite }) => {
  return (
    <>
      <div className="w-7 hover:opacity-100 mr-2 ml-2">
      <a href="https://github.com/abbyeg">
        { filterWhite ? (<img className="filter-white" src="/social/github-mark.svg" alt="Github" />) : (<img src="/social/github-mark.svg" alt="Github" />) } 
       </a>
      </div>
      <div className="w-7 hover:opacity-100 mr-2 ml-2">
        <a href="https://linkedin.com/in/abbygrobbel/">
        { filterWhite ? (<img className="filter-white" src="/social/linkedin.svg" alt="LinkedIn" />) : (<img src="/social/linkedin.svg" alt="LinkedIn" />) } 
        </a>
      </div>
    </>
  );
}

Socials.propTypes = {
  filterWhite: PropTypes.bool,
};
 
const Footer = () => {
  return (
    <div id="footer" className="py-6 px-4 w-full mt-auto flex flex-row justify-center">
      <div className="opacity-20 flex"><Socials /></div>
    </div>
  );
};

export { Footer as default, Socials };
