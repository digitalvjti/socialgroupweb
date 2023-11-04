import React from "react";
import "./Body.css";
import image from "./Scarecrow.png";
import { useNavigate} from "react-router-dom";

const Body = () => {
  let navigate = useNavigate();

  return (
    <>
    <header>
      {/* <p>404 Not Found</p> */}
    </header>
    <section>
      <div className="contain-img">
        <img src={image} alt="Imagen" />
      </div>
      <div className="text-description">
        <h1>I have bad news for you</h1>
        <p>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
      </div>
      {setTimeout(navigate("/"), 5000)}
    </section>
    
    </>
  );
};

export default Body;
