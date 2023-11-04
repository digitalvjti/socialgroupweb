import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/commitee.css";
import "boxicons";
import EventCard from "./EventCard/EventCard";
import { Helmet } from "react-helmet-async";
import CustomCarousel from './Carousel/CustomCarousel'

const Commitee = ({ team, events, sponsors, head, egallery, psponsors }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const numForEvents = {
    0: {
      items: 1
    },
    512: {
      items: 1
    },
    1024: {
      items: 1
    },
  };

  const numForTeam = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 5,
    },
  };



  // const addEllipsis = (str, limit) => {
  //   return str.length > limit ? str.substring(0, limit) + " ..." : str;
  // };

  return (
    <>
      {/* <Helmet>
        <title>VJTI Social Group</title>
        <meta name="description" content="VJTI Social Group" />
        <link rel="canonical" href="/committee" />
      </Helmet> */}
      <div className="d-flex flex-row justify-content-center">
        <div className="context">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <img
              src={team.logo}
              alt="dla"
              border="0"
              style={{ height: "7rem", width: "7rem" }}
            />
          </div>
          <div class="patterns">
            <svg width="100%">
              <defs>
                <style>
                  @import url("https://fonts.googleapis.com/css?
                  family=Lora:400,400i,700,700i");
                </style>
              </defs>
              <text x="50%" y="60%" text-anchor="middle">
                {team.name}
              </text>
            </svg>
          </div>
          <div style={{ backdropFilter: "blur(5px)" }}>

            <div className="sections">
              <div className="subsec">
                <h2>About</h2>
                <p>{team.desc}</p>
              </div>
              <hr className="hrStyle" size="6" />

              <div className="subsec">
                <h2>Dates</h2>
                <p>{team.dates}</p>
              </div>
              <hr className="hrStyle" size="6" />
              <div className="subsec">
                <h2>Events</h2>

                <div className="eventsc">
                  {events.map((event) => (
                    <div data-aos="fade-up" className="ui-card">
                      <img src={event.eimg} />
                      <div class="description">
                        <h4>{event.etitle}</h4>
                        {/* <p>{addEllipsis(event.edescription, 100)}</p> */}

                        <p>
                          <box-icon
                            name="calendar-event"
                            color="white"
                            style={{
                              paddingInlineEnd: "5px",
                              verticalAlign: "sub",
                            }}
                          />
                          {event.edate}
                        </p>
                        <a href={event.elink}>
                          <box-icon
                            name="right-arrow-alt"
                            color="black"
                            style={{ verticalAlign: "sub" }}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="hrStyle" size="6" />
              <div className="subsecteam">
                <h2>Our Team</h2>
                <CustomCarousel data={head} num={numForTeam}></CustomCarousel>
              </div>
              <hr className="hrStyle" size="6" />
              {
                sponsors.length >= 1 ?
                  <>
                    <div className="subsec">
                      <h2>Current Sponsors</h2>
                      <div className="d-flex flex-row flex-wrap justify-content-evenly">
                        {sponsors.map((sponsor) => (
                          <EventCard
                            imageSource={sponsor.simg}
                            sponsorName={sponsor.stitle}
                          ></EventCard>

                        ))}
                      </div>
                    </div>
                    <hr className="hrStyle" size="6" />
                  </>
                  :
                  <></>
              }

              {psponsors.length >= 1 ?
                <>
                  <div className="subsec">
                    <h2>Past Sponsors</h2>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                      {psponsors.map((psponsors) => (
                        <Card.Img
                          src={psponsors.pimg}
                          style={{ objectFit: 'cover', height: 'auto' }}
                        />
                      ))}
                    </div>
                  </div>
                  <hr className="hrStyle" size="6" />
                </>
                :
                <></>
              }
              <div className="subsecteam">
                <h2>Event Gallery</h2>
                <CustomCarousel data={egallery} num={numForEvents}></CustomCarousel>
              </div>
              <hr className="hrStyle" size="6" />
              <div className="subsec">
                <h2>Website</h2>
                <p>
                  For more information login to
                  <a href={team.link} target="_blank" className="customBtn">
                    {team.name}
                  </a>
                </p>
              </div>
              <hr className="hrStyle" size="6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitee;
