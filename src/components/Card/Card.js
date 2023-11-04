import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Card = ({ sourceLink, committeeName, imageSource }) => {
    return (
        <>
            <div className='base-container my-2 mx-lg-2 d-flex flex-column justify-content-end'>
                <img className='logo' src={imageSource} alt="" />
                <div className='text-center buttonWrapper'>
                    {/* <Link to={sourceLink} className='btn text-center' id='myButton'>
                        {committeeName}
                    </Link> */}
                    {/* {/* <Link to={sourceLink}>
                        <button className='button-86 m-auto mt-2' role='button'>
                            {committeeName}
                        </button>
                    </Link> */}
                    <a href={sourceLink}>
                        <button className='button-86 m-auto mt-2' role='button'>
                            {committeeName}
                        </button>
                    </a>
                </div>
            </div >
        </>
    )
}

export default Card