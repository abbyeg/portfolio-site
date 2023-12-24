import PropTypes from 'prop-types';
import { useState } from 'react';
import GalleryItem from './GalleryItem';
import Dropdown from './Dropdown';

const Gallery = ({ content, categories, galleryRef, scrollToTop }) => {
  const [curCategory, setCurCategory] = useState("all");
  let projects = [...content.values()];
  
  return (
    <div ref={galleryRef} id="work">
      <div className="text-center pt-2">
        <Dropdown categories={categories} setCurCategory={setCurCategory} />
      </div>
      <div className="projects-grid flex flex-wrap p-16">
          {projects.map((proj) => {
            if (curCategory === "all" || proj.cats.includes(curCategory)) {
              return (
                <GalleryItem
                  key={proj.id}
                  project={proj}
                />
              );
            }
        })}
      </div>
      <div>
      <div className="flex items-center justify-center w-screen h-1/2">
        <button id="to-top-btn" className="animate-bounce p-4 m-4 shadow-sm border-2 w-20 h-20 rounded-full text-xs hover:-translate-y-1 hover:bg-neutral-200 hover:text-black opacity-80" onClick={scrollToTop}>Scroll to Top</button>
      </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  galleryRef: PropTypes.object.isRequired,
  scrollToTop: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};


export default Gallery;