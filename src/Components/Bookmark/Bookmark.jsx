import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="">
      <div className="w-[351px] bg-white mx-[30px]  rounded-lg my-4">
        <h1 className="text-lg font-semibold p-5">{title}</h1>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
