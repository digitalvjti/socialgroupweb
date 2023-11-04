import React from 'react';
import Card from '../Card/Card';
import './style.css';

const Committees = () => {
    return (
        <>
            <section style={{ backdropFilter: "blur(5px)" }} className="parentBoxDark mt-3 mx-2" id='socialGroups'>
                <div className="container contentBoxDark py-4 px-lg-5 px-0">
                    <div className="contentTitleDark p-3">
                        <h2>Committees</h2>
                    </div>
                    <div className='d-flex flex-row flex-wrap justify-content-center'>
                        <Card committeeName="Technovanza" imageSource={`Assets/Allimages/Technovanza/technovanza.png`} sourceLink="/technovanza" ></Card>

                        <Card committeeName="Pratibimb" imageSource={`/Assets/Logos/pratibimb.jpg`} sourceLink="/pratibimb" ></Card>

                        <Card committeeName="Enthusia" imageSource={`Assets/Allimages/Enthusia/enthusia.jpg`} sourceLink="/enthusia" ></Card>

                        <Card committeeName="Rangawardhan" imageSource={`/Assets/Logos/rangawardhan.jpg`} sourceLink="/rangwardhan"  ></Card>

                        <Card committeeName="E-Cell" imageSource={`/Assets/Allimages/ECell/Logo Ecell.png`} sourceLink="/ecell" ></Card>

                        <Card committeeName="Digital VJTI" imageSource={`/Assets/Allimages/Digital/digital.png`} sourceLink="/digitalvjti" ></Card>

                        <Card committeeName="DLA" imageSource={`/Assets/Logos/dla.jpg`} sourceLink="/dla" ></Card>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Committees
