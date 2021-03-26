import React from "react";
import "./News1.css";
import Edet from "../../edet/edetBtn";
import data from "./data";
const News1 = () => {
  return (
    <div className="news-1">
      <div className="container">
        {data.map(({ info, img_url }, index) => (
          <div
            className="item"
            key={index}
            style={{
              background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${img_url}) no-repeat center`,
            }}
          >
            <div className="info">
              <h4>
                <a href="/">{info}</a>
              </h4>
              <Edet />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News1;
