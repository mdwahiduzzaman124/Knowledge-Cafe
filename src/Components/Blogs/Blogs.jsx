import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarkEvent, handleTimeEvent }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="max-w-2/3 m-auto">
      <h1 className="text-center text-4xl font-bold">
        Total Blogs: {blogs.length}
        <div className="mt-5">
          {blogs.map((blog, idx) => (
            <Blog
              key={idx}
              blog={blog}
              handleBookmarkEvent={handleBookmarkEvent}
              handleTimeEvent={handleTimeEvent}
            ></Blog>
          ))}
        </div>
      </h1>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarkEvent: PropTypes.func.isRequired,
  handleTimeEvent: PropTypes.func.isRequired,
};

export default Blogs;
