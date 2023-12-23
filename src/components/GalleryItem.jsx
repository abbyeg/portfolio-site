import PropTypes from 'prop-types';

const GalleryItem = ({ name, desc }) => {
  console.log(name);
  return (
  <div className="gallery-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 h-96 p-4">
    <div className="h-full bg-neutral-300 p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-neutral-100 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none text-opacity-0 hover:text-black hover:text-opacity-70">
      <div className="h-full font-light text-xs flex flex-wrap items-center justify-center">
        <div className="text-center content-between">
          <div>{name}</div>
          <div>{desc}</div>
        </div>
      </div>
    </div>
  </div>);
};

GalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default GalleryItem;