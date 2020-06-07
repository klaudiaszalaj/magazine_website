import React from 'react';
import MainArticle from './MainArticle';
import Author from './Author';
import Articles from './Articles';
import Newsletter from './Newsletter';

const Homepage = () => {
    return(
        <React.Fragment>
            <MainArticle />
            <Author />
            <h1 id="articles-title">Other Articles</h1>
            <Articles />
            <Newsletter />
        </React.Fragment>
    )

}

export default Homepage