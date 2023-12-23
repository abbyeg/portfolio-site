import PropTypes from 'prop-types';

const GalleryItem = ({ name, desc }) => {
  console.log(name);
  return (
  <div className="gallery-item border-0 border-gray-800 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 h-96 p-4">
    <div className="h-full border-2 border-gray-300 bg-indigo-950 p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-900 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none text-gray-400 hover:text-white">
      <div className="font-bold">
        <div>{name}</div>
        <div>{desc}</div>
      </div>
    </div>
  </div>);
};

GalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default GalleryItem;