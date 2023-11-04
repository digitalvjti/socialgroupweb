import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './style.css'

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ data, num }) => {

    const items = data.map((c) => (
        <div style={{ color: "white" }} className="carouselItem">
            <img
                src={c.himg}
                alt={c?.hname}
                onDragStart={handleDragStart}
                className="carouselItemImage"
            />
            <b style={{ fontSize: "1.2rem" }} className="carouselItem__txt text-center">{c?.hname}</b>
            <b style={{ textTransform: "uppercase", fontSize: "0.7rem" }} className="carouselItem__txt text-center">{c?.htitle}</b>
            {
                c.linkedin ?
                    <b className="text-center"> <a target='_blank' href={c.linkedin}><box-icon color="rgb(154, 127, 189)" type='logo' size='md' name='linkedin'></box-icon></a></b>
                    :
                    <></>
            }

        </div>
    ));

    // const responsive = {
    //     0: {
    //         items: 3,
    //     },
    //     512: {
    //         items: 4,
    //     },
    //     1024: {
    //         items: 5,
    //     },
    // };

    return (
        <AliceCarousel
            mouseTracking
            infinite
            animationDuration={2000}
            disableDotsControls
            disableButtonsControls
            responsive={num}
            items={items}
            autoPlay
        />
    );
};

export default Gallery;