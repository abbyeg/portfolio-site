import PropTypes from 'prop-types';
import { useState } from 'react';
import GalleryItem from './GalleryItem';
import Dropdown from './Dropdown';
import { v4 as uuidv4 } from 'uuid';

const Gallery = ({ galleryRef, scrollToTop }) => {
  const [curCategory, setCurCategory] = useState("all");

  let categories = [
    { display: "All", value: "all" },
    { display: "Software", value: "software" },
    { display: "Web", value: "web" },
    { display: "Writing", value: "writing" },
  ];

  let projects = [
    { id: uuidv4(), name: "Building an Interactive Portfolio Site", sub: "Vite, React, JS, CSS, HTML", previewImage: "./src/assets/proj1/preview.gif", cats: ["software", "web", "writing"], link: "/work/portfolio-project" },
    { id: uuidv4(), name: "Real Time 3D Renderer", sub: "Rust, OpenGL", previewImage: "./src/assets/proj1/preview.gif", cats: ["software"], link: "https://github.com/abbyeg" },
    { id: uuidv4(), name: "Custom Shaders", sub: "GLSL", previewImage: "./src/assets/proj1/preview.gif", cats: ["software"] },
    { id: uuidv4(), name: "Procedural Content Generation Tool", sub: "CSS", previewImage: "./src/assets/proj1/preview.gif", cats: ["software"] },
    { id: uuidv4(), name: "Interactive Art Installation", sub: "CSS", previewImage: "./src/assets/proj1/preview.gif", cats: ["software"] },
    { id: uuidv4(), name: "Rigging and Animation Toolkit", sub: "", previewImage: "./src/assets/proj1/preview.gif", cats: ["software"] },
    { id: uuidv4(), name: "Building an Interactive Portfolio Site", sub: "Vite, React, JS, CSS, HTML", previewImage: "./src/assets/proj1/preview.gif", cats: ["software", "web", "writing"] },
  ];


  return (
    <div ref={galleryRef} id="work">
      <div className="text-center pt-2">
        <Dropdown categories={categories} setCurCategory={setCurCategory} />
      </div>
      <div className="projects-grid flex flex-wrap p-16">
          {projects.map((project) => {
            if (curCategory === "all" || project.cats.includes(curCategory)) {
              
              return (
                <GalleryItem
                  key={project.id}
                  project={project}
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
  galleryRef: PropTypes.object,
  scrollToTop: PropTypes.func,
};


export default Gallery;