import React from 'react';
import { Link } from 'react-router-dom';

class Article extends React.Component {
    state = {
        heart: "far fa-heart"
    }

handleHeart = () => {
    let heart = this.state.heart;
    if (heart === "far fa-heart") 
        return this.setState({
            heart: "fas fa-heart"
        })
}

render() {
    const { className, title, link } = this.props;
    return(
        <div id="article-container" className="col-md-3 col-sm-12">
            <div id="article-photo" className={className}>
                <i id="article-share" className="fas fa-share"></i>
                <i id="article-heart" onClick={this.handleHeart} className={this.state.heart}></i>
            </div>
            <div id="article-text">
                <div id="article-p">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div id="article-button">
                    <button id="seemore" className="btn btn-light btn-lg">
                        <Link to={link}>
                            Read ->
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
}

export default Article