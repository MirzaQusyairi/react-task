import React from 'react'
import { useNavigate } from 'react-router-dom'

import page404 from '../../Assets/Images/404.png'

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center">
            <img src={page404} alt="404 page" className="w-75 mx-auto" />
            <h1 className="fw-light fs-3 m-3 text-center">Oops! Something went wrong!</h1>
            <button onClick={() => navigate('/')} className="btn btn-outline-danger mt-3 mx-auto">
                Return to Home
            </button>
        </div>
    )
}

export default NotFound
