import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const Meetings = () => {

    return(
        <React.Fragment>
            <div id="meeting-image" className="col-sm-5 float-left"></div>
            <div id="meeting-text" className="col-sm-7 float-left">
                <h1>Let's meet together!</h1>
                <h4>Next date: 1 August of 2020</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea unde, officia dolores magni id alias deserunt, perspiciatis. Explicabo quaerat harum vel dicta quos, rem illum nulla adipisci architecto ipsa obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea unde, officia dolores magni id alias deserunt, perspiciatis. Explicabo quaerat harum vel dicta quos, rem illum nulla adipisci architecto ipsa obcaecati!
                </p>
                <button id="meeting-button"><Link to="/login">Get your ticket!</Link></button>
            </div>
            <div style={{clear: "both"}}></div>
            <Countdown />
            <div id="meeting-icons-con">
                <div className="meeting-icons">
                    <i className="far fa-building"></i>
                    <h4>Warsaw, ul.Zlota 2/1 </h4>
                </div>
                <div className="meeting-icons">
                    <i className="fas fa-users"></i>
                    <h4>Only 150 tickets available</h4>
                </div>
                <div className="meeting-icons">
                    <i className="fas fa-music"></i>
                    <h4>Live music and DJ</h4>
                </div>           
                <div className="meeting-icons">
                    <i className="fas fa-glass-cheers"></i>
                    <h4>Best drinks and food!</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Meetings