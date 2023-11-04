import React from "react";
import "./style.css";
import "./border.css";
import About from "../About/About";
import Committees from "../Committees/Committees";
import Team from "../Team/Team";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column home">
        <div
          id="homeBody"
          className="d-flex flex-row justify-content-center display-5"
        >
          <div style={{ backdropFilter: "blur(5px)" }} className="box">
            <div className="text-center groupLogo" data-in-effect="rollIn">
              VJTI SOCIAL GROUP
            </div>
            <div className="text-center groupMoto">Veni Vidi Vici</div>
          </div>
        </div>
      </div>
      <About></About>
      <Committees></Committees>
      <Team></Team>
    </>
  );
};

export default Home;
