import React from "react";
import Home from "./components/Home/Home";
import Commitee from "./components/Commitee";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json";
import NavbarMain from "./components/Navbar/NavbarMain";
import Footer from "./components/Footer/Footer";
import Loader from "./components/PageLoader/Loader";
import { useState, useEffect } from "react";
import Committees from "./components/Committees/Committees";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Helmet } from "react-helmet-async";
import Body from "./components/404notFound/Body";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
    <Helmet>
      <title>VJTI Social Group</title>
      <meta name="description" content="The VJTI Social Group is the parent body of renowned committees serving various domains. We encourage holistic development of students as part of their extracurricular activities."/>
    </Helmet>
    <BrowserRouter>
      <div className="app-container">
        {loading && <Loader />}
        {/* <Loader /> */}
        <NavbarMain></NavbarMain>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/pratibimb"
            element={
              <Commitee
                team={{
                  name: "Pratibimb",
                  desc: `${data[0].desc}`,
                  link: `${data[0].link}`,
                  dates: `${data[0].dates}`,
                  logo: `${data[0].logo}`,
                }}
                head={data[0].head}
                events={data[0].events}
                sponsors={data[0].sponsors}
                egallery={data[0].egallery}
                psponsors={data[0].psponsors}
              />
            }
          />
          <Route
            exact
            path="/technovanza"
            element={
              <Commitee
                team={{
                  name: "Technovanza",
                  desc: `${data[1].desc}`,
                  link: `${data[1].link}`,
                  dates: `${data[1].dates}`,
                  logo: `${data[1].logo}`,
                }}
                head={data[1].head}
                events={data[1].events}
                sponsors={data[1].sponsors}
                egallery={data[1].egallery}
                psponsors={data[1].psponsors}
              />
            }
          />
          <Route
            exact
            path="/rangwardhan"
            element={
              <Commitee
                team={{
                  name: "Rangwardhan",
                  desc: `${data[2].desc}`,
                  link: `${data[2].link}`,
                  dates: `${data[2].dates}`,
                  logo: `${data[2].logo}`,
                }}
                head={data[2].head}
                events={data[2].events}
                sponsors={data[2].sponsors}
                egallery={data[2].egallery}
                psponsors={data[2].psponsors}
              />
            }
          />
          <Route
            exact
            path="/dla"
            element={
              <Commitee
                team={{
                  name: "DLA",
                  desc: `${data[3].desc}`,
                  dates: `${data[3].dates}`,
                  link: `${data[3].link}`,
                  logo: `${data[3].logo}`,
                }}
                events={data[3].events}
                sponsors={data[3].sponsors}
                head={data[3].head}
                egallery={data[3].egallery}
                psponsors={data[3].psponsors}
              />
            }
          />
          <Route
            exact
            path="/enthusia"
            element={
              <Commitee
                team={{
                  name: "Enthusia",
                  desc: `${data[4].desc}`,
                  link: `${data[4].link}`,
                  dates: `${data[4].dates}`,
                  logo: `${data[4].logo}`,
                }}
                head={data[4].head}
                events={data[4].events}
                sponsors={data[4].sponsors}
                egallery={data[4].egallery}
                psponsors={data[4].psponsors}
              />
            }
          />
          <Route
            exact
            path="/digitalvjti"
            element={
              <Commitee
                team={{
                  name: "Digital VJTI",
                  desc: `${data[5].desc}`,
                  link: `${data[5].link}`,
                  dates: `${data[5].dates}`,
                  logo: `${data[5].logo}`,
                }}
                events={data[5].events}
                head={data[5].head}
                sponsors={data[5].sponsors}
                egallery={data[5].egallery}
                psponsors={data[5].psponsors}
              />
            }
          />
          <Route
            exact
            path="/ecell"
            element={
              <Commitee
                team={{
                  name: "E-Cell",
                  desc: `${data[6].desc}`,
                  link: `${data[6].link}`,
                  dates: `${data[6].dates}`,
                  logo: `${data[6].logo}`,
                }}
                events={data[6].events}
                sponsors={data[6].sponsors}
                head={data[6].head}
                egallery={data[6].egallery}
                psponsors={data[6].psponsors}
              />
            }
          />
          <Route
            exact
            path="/socialgroups"
            element={
              <Committees></Committees>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About></About>
            }
          />
          <Route
            exact
            path="*"
            element={
              <Body/>
            }
          />
          <Route
            exact
            path="contact"
            element={
              <Contact />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
