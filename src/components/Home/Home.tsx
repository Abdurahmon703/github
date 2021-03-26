import React from "react";
import "./Home.css";
import Edet from "../edet/edetBtn";
export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="container">
          <div className="col-lg-8 col-md-12">
            <div className="content">
              <h3>
                <a href="/">Sed purus velit, finibus non semper…</a>
              </h3>
              <Edet />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="box-1">
              <div className="content">
                <h3>
                  <a href="/">Nunc hendrerit egestas amus ad arcu…</a>
                </h3>
                <Edet />
              </div>
            </div>
            <div className="box-2">
              <div className="content">
                <h3>
                  <a href="/">Itum as binus sitam conestum ey</a>
                </h3>
                <Edet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
