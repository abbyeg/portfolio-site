import { useRef } from 'react';
import Gallery from './Gallery';


const Work = () => {
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    console.log("Scrolling");
    console.log(galleryRef);
    galleryRef.current.scrollIntoView();
  }  

  console.log("Rendering Work");
  return (
  <div className="">
    <button onClick={scrollToGallery}>Go to gallery</button>
    <Gallery galleryRef={galleryRef} />
  </div>);
};

export default Work;