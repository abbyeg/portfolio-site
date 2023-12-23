import PropTypes from 'prop-types';
import { useState } from 'react';
import GalleryItem from './GalleryItem';
import Dropdown from './Dropdown';

const Gallery = ({ galleryRef }) => {
  const [curCategory, setCurCategory] = useState("all");

  let categories = [
    { displayName: "All", value: "all" },
    { displayName: "Games", value: "games" },
    { displayName: "Web", value: "web" },
    { displayName: "Writing", value: "writing" },
  ];

  let projects = [
    { id: 1, name: "Web Development Project", desc: "desc", cat: "web" },
    { id: 2, name: "Video Game Project 1", desc: "desc", cat: "games" },
    { id: 3, name: "Web Project 2", desc: "desc", cat: "web" },
    { id: 4, name: "Blog Post 1", desc: "desc", cat: "writing" },
    { id: 5, name: "Game 2", desc: "desc", cat: "games" },
    { id: 6, name: "Web Project 3", desc: "desc", cat: "web" },
  ];

  return (
    <div ref={galleryRef} id="work" className="h-screen">
      <div className="text-center pt-2">
        <Dropdown categories={categories} setCurCategory={setCurCategory} />
      </div>
      <div className="projects-grid flex flex-wrap p-16">
          {projects.map((project) => {
            if (curCategory === "all" || project.cat === curCategory) {
              return (
                <GalleryItem
                  key={project.id}
                  name={project.name}
                  desc={project.desc}
                />
              );
            }
        })}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  galleryRef: PropTypes.object,
};


export default Gallery;