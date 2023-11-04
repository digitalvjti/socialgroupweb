import React from 'react';
import 'aos/dist/aos.css';

const About = () => {
    return (
        <>
            <section style={{ backdropFilter: "blur(5px)" }} id="about" className="parentBoxDark mt-3 mx-2">
                <div className="container contentBoxDark p-5">
                    <div className="contentTitleDark p-3">
                        <h2>About</h2>
                    </div>

                    <div className='row '>
                        <div className="col-lg-4">
                            <img className="quadImage" src="/Assets/Background_Images/Quad.jpg" alt="Image of Quadrangle in Veermata Jijabai Technological Institute, Matunga, Mumbai" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0">
                            <p className='contentInformationDark text-center'>
                               Welcome to the dynamic world of the VJTI Social Group! We're an incredible conglomeration of 8 committees, fueling the energy of 6 national-level fests and a plethora of diverse events. It's a vibrant platform where you can unleash your talents and acquire invaluable skills across multiple domains. But there's more to us than just fun and festivities. Together with dedicated NGOs, we ignite change through impactful social and humanitarian activities. We believe in extending our helping hands with genuine empathy, going the extra mile to make a tangible difference in the lives of others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
