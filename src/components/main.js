import React from "react";
import image1 from "../images/main-image1.jpg";

import image2 from "../images/main-image2.jpg";

const Main = () => (
  <div>
    <main class="main">
      <div class="main-container">
        <div className="center">
          {" "}
          <h1 class="main-title "> Spring Sale</h1>{" "}
        </div>

        <div className="center">
          {" "}
          <p class="main-p">Buy 1 and get -30% off</p>{" "}
        </div>
        <div className="center">
          {" "}
          <p class="main-p">Buy 2 and get -40% off</p>{" "}
        </div>
        <div className="center">
          {" "}
          <p class="main-p">Buy 3 and get -50% off</p>{" "}
        </div>
        <div className="center">
          {" "}
          <p class="main-p">on all regular prices</p>{" "}
        </div>
        <div className="center">
          {" "}
          <a href="">
            {" "}
            <button className="main-button"> SHOP NOW </button>{" "}
          </a>{" "}
        </div>
      </div>
    </main>
  </div>
);

export default Main;
