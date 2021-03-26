import React, { useState, useEffect, useRef } from "react";
import "./Block1.css";
import data from "./data";
export default function Block1() {
  const [itemIndex, setItemIndex] = useState<number>(0);
  const element: any = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (itemIndex + 1 === data.length) {
        setItemIndex(0);
      } else {
        setItemIndex(itemIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [itemIndex]);

  useEffect(() => {
    element.current.style.cssText = `
    transform: translate3d(${itemIndex * -300}px, 0px, 0px);
    transition: all 0.25s ease 0s;`;
  });
  return (
    <div className="Block1">
      <div className="container">
        <div className="row">
          <div className="col l8 m12 left-item">
            <div className="item-1">
              <div className="icon">
                <i className="fas fa-bullhorn" />
              </div>
              <div id="info">
                <span>Latest News</span>
              </div>
            </div>
            <div className="info">
              <div className="chaild" ref={element}>
                {data.map(({ title }: { title: string }, index: number) => {
                  return (
                    <span key={index}>
                      <a href="/">{title}</a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col l4 m12 right-item">
            <div className="search">
              <input type="text" placeholder="Search..." id="search1" />
              <label htmlFor="search1">
                <i className="fas fa-search" />
              </label>
            </div>
            <div className="link">
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://tumblr.com">
                <i className="fab fa-tumblr" />
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://google.com">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="https://youtube.com">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
