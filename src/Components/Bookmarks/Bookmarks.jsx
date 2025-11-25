
import PropTypes from "prop-types";
import Times from "../Times/Times";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-5">
        Total Bookmarks: {bookmarks.length}
      </h2>
      <Times time={time}></Times>
      <div className="w-[411px] bg-[#1111110D] py-5 mt-6 rounded-lg">
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.object.isRequired,
  time: PropTypes.func.isRequired,
};

export default Bookmarks;
