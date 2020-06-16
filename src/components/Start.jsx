import React from 'react';
import { Link } from 'react-router-dom';
import LOGOLAFB from '../photos/LOGOLAFB.png'

const Start = () => {

    return(
        <nav className="navbar navbar-expand-lg" id="nav-start">
            <div className="d-none d-md-block"id="logo">
                <Link to="/"><img src={LOGOLAFB} alt="" width="50%" /></Link>
            </div>
            <div className="col-sm-3 d-none d-md-block" id="start-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="media">
                <a className="start-media" href=".."><i className="fab fa-facebook"></i></a>
                <a className="start-media" href=".."><i className="fab fa-twitter"></i></a>
                <a className="start-media" href=".."><i className="fab fa-instagram"></i></a>
                <a className="start-media" href=".."><i className="fab fa-youtube"></i></a>
            </div>
            <div style={{clear: "both"}}></div>
        </nav>
    )
}

export default Start