import React, { useState } from 'react';
import Modal from '../reusable/Modal';

const Newsletter = () => {
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div id="news-container">
            <h1>Newsletter</h1>
            <p>Too much information? Want me to send you info everytime I write new article? Sign up for a newsletter.</p>
            <input id="news-input" type="text"/>
            <br/>

            <button 
                id="news-button" 
                className="btn btn-light btn-lg" 
                onClick={(e) => setIsOpen(true)}
                >SEND</button>

            <Modal 
                isOpen={isOpen}
                onClose={(e) => setIsOpen(false)}
                modalText={"Thank you for your subscription!"}
                />
        </div>
    )
}

export default Newsletter