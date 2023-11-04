import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <>
            <section className="mt-5 pt-5 footer" id="footer">
                <div className="container">
                    <div className='row pb-5'>
                        <div className='mb-3'><h3>VJTI SOCIAL GROUP</h3></div>
                        <div className='my-4 my-md-1 col-lg-4 text-md-start text-center'>
                            <div className=''>
                                <a className='mx-2' target='_blank' href="https://www.instagram.com/digital.vjti/"><box-icon color="rgb(154, 127, 189)" type='logo' size='md' name='instagram'></box-icon></a>
                                <a className='mx-2' target='_blank' href="https://www.instagram.com/digital.vjti/"><box-icon color="rgb(154, 127, 189)" type='logo' size='md' name='linkedin'></box-icon></a>
                                <a className='mx-2' target='_blank' href="https://www.instagram.com/digital.vjti/"><box-icon color="rgb(154, 127, 189)" type='logo' size='md' name='youtube'></box-icon></a>
                                <a className='mx-2' target='_blank' href="https://www.instagram.com/digital.vjti/"><box-icon color="rgb(154, 127, 189)" type='logo' size='md' name='facebook'></box-icon></a>
                                <a className='mx-2' href="googlegmail://"><box-icon color="rgb(154, 127, 189)" type='logo' size='md' name='twitter'></box-icon></a>
                            </div>
                        </div>

                        <div className='col-lg-4 text-center my-md-2 my-4'>
                            <h5>Quick Links</h5>
                            <div>
                                <Link to="/about" style={{ color: "inherit" }}>About</Link>
                            </div>
                            <div>
                                <Link to="/socialGroups" style={{ color: "inherit" }}>Committees</Link>
                            </div>
                            <div>
                                <Link to='/contact' style={{ color: "inherit" }}>Contact</Link>
                            </div>

                        </div>
                        <div className='col-lg-4 text-center mt-md-2 mt-4'>
                            <h5>Address</h5>
                            2VC4+VCQ, H R Mahajani Rd, Matunga East,
                            <br />
                            Mumbai, Maharashtra 400019
                            <br />
                            <box-icon color="white" type="solid" name="phone"></box-icon>  0222419 8101
                            <br />
                            <a target="_blank" style={{ color: "inherit" }} href="https://www.google.com/maps/place/Veermata+Jijabai+Technological+Institute/@19.0140813,72.8501668,13z/data=!4m5!3m4!1s0x3be7cf2669ac5ab5:0x771c37c221bba6f9!8m2!3d19.0235956!4d72.856132"><box-icon color='white' name='map'></box-icon> Google Map</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer