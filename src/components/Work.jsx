import PropTypes from 'prop-types';
import { useRef } from 'react';
import Gallery from './gallery/Gallery';


const Work = ({ content }) => {
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    console.log("Scrolling");
    console.log(galleryRef);
    galleryRef.current.scrollIntoView();
  }  

  console.log("Rendering Work");
  return (
    <Gallery galleryRef={galleryRef} scrollToTop={scrollToGallery} content={content} />
  );
};


Work.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Work;