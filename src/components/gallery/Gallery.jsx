import PropTypes from 'prop-types';
import { useState } from 'react';
import GalleryItem from './GalleryItem';
import Dropdown from './Dropdown';
import { v4 as uuidv4 } from 'uuid';

const Gallery = ({ content, galleryRef, scrollToTop }) => {
  const [curCategory, setCurCategory] = useState("all");
  console.log(content);
  let projects = [...content.values()];
  let categories = [
    { display: "All", value: "all" },
    { display: "Software", value: "software" },
    { display: "Web", value: "web" },
    { display: "Writing", value: "writing" },
  ];


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
};


export default Gallery;