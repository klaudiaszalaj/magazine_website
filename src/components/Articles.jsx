import React from 'react';
import Article from './Article';

const Articles = () => {    

    return(
        <React.Fragment>
            <div className="row" id="article-containers">
                <Article
                    className={'article1'} 
                    title="Party in a Singapour"
                    link="/article1"
                    />
                <Article 
                    className={'article2'}
                    title="Clubbing all night"
                    link="/article2"
                    />
                <Article 
                    className={'article3'}
                    title="Technology in 2021"
                    link="/article3"
                    />
                <div style={{clear: "both"}}></div>
            </div>
            <div className="row" id="article-containers">
                <Article 
                    className={'article4'}
                    title="How to plan 24h in Berlin"
                    link="/article4"
                    />
                <Article 
                    className={'article5'}
                    title="Best playlist for summer 2020"
                    link="/article5"
                    />
                <Article 
                    className={'article6'}
                    title="Big review of Cannes 2019"
                    link="/article6"
                    />
                <div style={{clear: "both"}}></div>
            </div>

        </React.Fragment>
    )
}

export default Articles