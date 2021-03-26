import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Block3.css";
import { FaBars, FaTimes, FaAngleDown, FaAngleRight } from "react-icons/fa";

const Block4 = () => {
  const [click, setClick] = useState<boolean>(true);
  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div className="Block3">
      <div className="container">
        <div className="row">
          <div className="col l4 m6 s12">
            <label className="icon" onClick={clickHandler}>
              {click ? <FaBars /> : <FaTimes />}
            </label>
            <ul className={click ? "Navbar" : "Navbar active-nav"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="news-parent">
                <Link to="/news">
                  News
                  <FaAngleDown className="angle-down" />
                </Link>
                <ul className="news">
                  <li className="world-news-parent">
                    <Link to="/news/the-world">
                      The Word
                      <FaAngleRight />
                    </Link>
                    <ul className="world-news">
                      <li>
                        <Link to="/news/the-world/world-news">World News</Link>
                      </li>
                      <li>
                        <Link to="/news/the-world/world-events">
                          World Events
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/news/event">Event</Link>
                  </li>
                  <li>
                    <Link to="/news/editorial">Editorial</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;
