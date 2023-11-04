import React from 'react'
import './style.css'
import 'aos/dist/aos.css';

const EventCard = ({ imageSource, sponsorName }) => {
    return (
        <>
            <div data-aos="fade-up" className='event-base-container m-1 d-flex flex-column justify-content-center'>
                <img className='eventImage' src={imageSource} alt="" />
                <div className='text-center pt-1' style={{ color: "black", backgroundColor: "white" }}>
                    {sponsorName}
                </div>
            </div >
        </>
    )
}

export default EventCard