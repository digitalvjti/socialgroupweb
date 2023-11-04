import React from 'react'

const Contact = () => {
    return (
        <>
            <section style={{ backdropFilter: "blur(5px)" }} id="about" className="parentBoxDark mt-3 mx-2">
                <div className="container contentBoxDark p-5">
                    <div className="contentTitleDark p-3">
                        <h2>Reach VJTI</h2>
                    </div>

                    <div>
                        <iframe title='map' className='map' style={{ width: "100%", height: "50vh" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.943343269783!2d72.85393251476812!3d19.02221808711877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1677604282529!5m2!1sen!2sin" ></iframe>
                    </div>

                    <div className="contentTitleDark p-3 mt-4">
                        <h2>Contact Us:</h2>
                    </div>
                    <div className='contentInformationDark ms-lg-2 text-center' style={{ fontSize: "1rem" }}>
                        For Collaborations: <br /> gs.socialgroup@vjti.ac.in
                        <br /><br />
                        For Sponsorships: <br />social.group@vjti.ac.in
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact