import React from 'react';

const Footer = () => {

    return(
        <footer>
            <div id="footer-credits">
                <p>Copyright &copy; 2020 by Klaudia Szalaj</p>
                <p>www.szalajklaudia.com</p>
                <p>Photos from <a id="unsplash-link" href="https://unsplash.com/"> Unsplash.com </a> </p>
            </div>
            <div id="footer-logo">
                <i className="fab fa-react"></i>
                <i className="fab fa-node-js"></i>
                <i className="fab fa-bootstrap"></i>
            </div>
        </footer>
    )
}

export default Footer