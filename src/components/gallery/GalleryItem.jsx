import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GalleryItem = ({ project }) => {

  let { title, preview, previewImage, link } = project;

  return (
  <div className="gallery-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 h-96 p-4 z-0">
    <Link to={link}>
      <div
        style={{ backgroundImage: `url(${previewImage})` }} 
        className="h-full bg-neutral-300 transition ease-in-out delay-150
          hover:-translate-y-1 hover:scale-105 duration-300
          text-black hover:text-white" >
        <div  className="h-full font-light text-xs flex flex-wrap items-center
            justify-center bg-black bg-opacity-10 hover:bg-opacity-70">
          <div className="text-center content-between gallery-preview-text">
            <div>{title}</div>
            <div>{preview}</div>
          </div>
        </div>
      </div>
    </Link>
  </div>);
};

GalleryItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default GalleryItem;