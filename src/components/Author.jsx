import React from 'react';
import { Link } from 'react-router-dom';

const Author = () => {

    return(
        <div id="author">
            <div id="author-container">
                <div id="photo-container">
                    <div id="author-photo"></div>
                </div>
                <div id="author-text">
                    <h2>About me</h2>
                    <p id="author-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius, excepturi modi quos commodi molestias cupiditate ipsum cum repudiandae, inventore numquam!</p>
                    <Link to="/author-page">
                        <button id="author-button" className="btn btn-light btn-lg">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )

}

export default Author