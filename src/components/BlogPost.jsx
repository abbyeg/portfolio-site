import PropTypes from 'prop-types';
import TextContent from './layout/TextContent';

const BlogPost = ({ post }) => {
  let { title, subheading, date, bodyContent } = post;
  console.log(post);
  
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  let prettyDate = date.toLocaleDateString("en-US", options);
  return (
    <TextContent>
      <div className="flex flex-wrap flex-col text-neutral-400">
      <div className="flex flex-row">
          <div className="font-extrabold text-4xl text-black">{title}</div>
        </div>
        <div className="flex flex-row">
          <div className="font-extrabold text-neutral-500 text-md mt-4 mb-4">{subheading}</div>
        </div>
        <div className="flex flex-row">
          <div>{prettyDate}</div>
        </div>
        <div className="flex flex-row">
          <div className="w-full border-b-2 opacity-5 border-neutral-600 mt-3 mb-6"></div>
        </div>
        {bodyContent.map((content) => {
          return (
            <div key={content[0]} className="flex flex-row text-black text-lg font-semibold text-left mt-2 mb-4">
              <div>{content}</div>
            </div>);
        })}
      </div>
    </TextContent>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPost;