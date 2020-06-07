import React, { useEffect, useState } from 'react';
import Modal from '../reusable/Modal';

const AuthorPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return(
        <div id="author-page" className="container-fluid">
            <div id="author-page-image" >
                <div id="author-page-text">
                    <h1>ABOUT ME</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, perspiciatis, vel? Perferendis eum dignissimos ipsum error ducimus explicabo magni vero quibusdam voluptate cupiditate beatae, optio similique nostrum laborum fugit, iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, perspiciatis, vel? Perferendis eum dignissimos ipsum error ducimus explicabo magni vero quibusdam voluptate cupiditate beatae, optio similique nostrum laborum fugit, iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, perspiciatis, vel? Perferendis eum dignissimos ipsum error ducimus explicabo magni vero quibusdam voluptate cupiditate beatae, optio similique nostrum laborum fugit, iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, perspiciatis, vel? Perferendis eum dignissimos ipsum error ducimus explicabo magni vero quibusdam voluptate cupiditate beatae, optio similique nostrum laborum fugit, iste.
                    </p>
                    <div id="author-page-media">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <div style={{clear: "both"}}></div>
            </div>

            <div id="author-form">                
                <h1>Contact me</h1>
                <form id="form" className="col-sm-6">
                    <div className="form-group">
                        <input type="name" className="form-control" placeholder="Your name" />
                    </div>                
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" placeholder="Write here" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Yes, you can send me a newsletter</label>
                    </div>
                    <button onClick={(e) => setIsOpen(true)} type="button" className="btn btn-primary btn-lg">Submit</button>
                </form>
                <Modal 
                    isOpen={isOpen}
                    onClose={(e) => setIsOpen(false)}
                    modalText={`Thanks for message! I am sending you email back as soon as possible!`}
                    />
            </div>       
        </div>
    )
}

//when linking to backend, must change 'button' type to 'submit'

export default AuthorPage;