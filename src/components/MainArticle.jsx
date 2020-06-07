import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
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
    return(
        <div id="main-article">
            <p>3 days ago</p>
            <Link to="/article0">
                <h1>Title of this article</h1>
            </Link>
            <i style={{paddingTop:10, paddingLeft: 50, fontSize: 25}} className="fas fa-share"></i>
            <i style={{paddingTop:10, paddingLeft: 50, fontSize: 25}} onClick={this.handleHeart} className={this.state.heart}></i>
        </div>
    )
}
}

export default Navbar