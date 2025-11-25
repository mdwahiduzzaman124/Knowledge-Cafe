
import PropTypes from "prop-types";
import { CiBookmarkCheck } from "react-icons/ci";
const Blog = ({ blog, handleBookmarkEvent, handleTimeEvent }) => {
  const {
    id,
    cover_photo_url,
    title,
    author_name,
    author_photo_url,
    posted_date,
    reading_time_minutes,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover_photo_url} className="w-[845px] rounded-lg" alt="" />
      {/* author photo and othere info */}
      <div className="flex items-center justify-between">
        <div className="flex gap-6 mt-8">
          <img className="w-[60px] h-[60px]" src={author_photo_url} alt="" />
          <div className="text-left">
            <h2 className="text-2xl font-semibold">{author_name}</h2>
            <p className="text-xl font-medium text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-[#11111199] text-2xl font-medium">
            {reading_time_minutes} min read
          </p>
          <button
            className="text-2xl"
            onClick={() => {
              handleBookmarkEvent(blog);
            }}
          >
            <CiBookmarkCheck></CiBookmarkCheck>
          </button>
        </div>
      </div>
      <h1 className="text-[40px] font-bold text-[#111111] w-[737px] text-left my-4">
        {title}
      </h1>
      <div className="text-left mb-5">
        {hashtags.map((hash, idx) => (
          <span
            key={idx}
            className="text-[#11111199] text-xl font-medium mr-4 "
          >
            {hash}
          </span>
        ))}
      </div>
      <div className="text-left mb-10">
        <button
          className="text-2xl font-semibold text-[#6047EC] underline"
          onClick={() => handleTimeEvent(reading_time_minutes, id)}
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarkEvent: PropTypes.func.isRequired,
  handleTimeEvent: PropTypes.func.isRequired,
};

export default Blog;
