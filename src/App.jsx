import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleBookmarkEvent = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  };
  const [time, setTime] = useState(0);
  const handleTimeEvent = (time1, id) => {
    setTime(time + time1);
    const remainBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmark(remainBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl m-auto">
        <Blogs
          handleBookmarkEvent={handleBookmarkEvent}
          handleTimeEvent={handleTimeEvent}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} time={time}></Bookmarks>
      </div>
    </>
  );
}

export default App;
