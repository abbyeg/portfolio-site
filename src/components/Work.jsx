import { useRef } from 'react';
import Gallery from './gallery/Gallery';


const Work = () => {
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    console.log("Scrolling");
    console.log(galleryRef);
    galleryRef.current.scrollIntoView();
  }  

  console.log("Rendering Work");
  return (
    <Gallery galleryRef={galleryRef} scrollToTop={scrollToGallery} />
  );
};

export default Work;