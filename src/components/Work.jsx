import PropTypes from 'prop-types';
import { useRef } from 'react';
import Gallery from './gallery/Gallery';


const Work = ({ content, categories }) => {
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView();
  }  

  return (
    <Gallery galleryRef={galleryRef} scrollToTop={scrollToGallery} content={content} categories={categories} />
  );
};


Work.propTypes = {
  content: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Work;