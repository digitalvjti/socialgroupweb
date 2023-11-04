import React from 'react'
import CustomCarousel from '../Carousel/CustomCarousel';

const Team = () => {
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

    const teamData = [
        {
            'himg': '/Assets/Team/vatsall.jpeg',
            'hname': 'Vatsal Parikh',
            'htitle': 'General Secretary',
            'linkedin': 'https://www.linkedin.com/in/mastervatsal/'
        },
        {
            'himg': '/Assets/Team/DSC_8605-1.JPG',
            'hname': 'Ashwini Padala',
            'htitle': 'Internal Auditor',
            'linkedin': 'https://in.linkedin.com/in/ashwini-padala-57bb7a231'
        },
        {
            'himg': '/Assets/Team/harshall.jpeg',
            'hname': 'Harshal Ubale',
            'htitle': 'Technical Lead',
            'linkedin': 'https://www.linkedin.com/in/harshalubale4/'
        },
        {
            'himg': '/Assets/Team/harshill.jpeg',
            'hname': 'Harshil Shah',
            'htitle': 'Technical Lead',
            'linkedin': 'https://in.linkedin.com/in/harshil-shah-6776a221b?trk=public_profile_browsemap'
        },
        {
            'himg': '/Assets/Team/chaityaa.jpeg',
            'hname': 'Chaitya Vora',
            'htitle': 'Technical Lead',
            'linkedin': 'https://in.linkedin.com/in/chaitya-vora-90693b202'
        },
    ]
    return (
        <>
            <section style={{ backdropFilter: "blur(5px)" }} id="about" className="parentBoxDark mt-3 mx-2">
                <div className="container contentBoxDark p-5">
                    <div className="contentTitleDark p-3">
                        <h2>Our Team</h2>
                    </div>
                    <CustomCarousel data={teamData} num={numForTeam}></CustomCarousel>

                </div>
            </section>
        </>
    )
}

export default Team
