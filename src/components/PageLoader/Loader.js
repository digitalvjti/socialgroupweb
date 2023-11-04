import React from "react";
import "./style.css";

const PageLoader = () => {
  return (
    <>
      <div className="pageLoader">
        <div class="preloader-wrap">
          <div class="preloader">
            <div class="loading-circle loading-circle-one"></div>
            <div class="loading-circle loading-circle-two"></div>
            <div class="loading-circle loading-circle-three"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLoader;
