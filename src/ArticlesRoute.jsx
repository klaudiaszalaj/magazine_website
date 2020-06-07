import React from 'react';
import { Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';

const ArticlesRoute = () => {
    return (
        <React.Fragment>
            <Route 
                exact 
                path="/article0" 
                render={(props) => <ArticlePage {...props} image={`article0`} title={`Title of the main article`} />}
                />  
            <Route 
                exact 
                path="/article1" 
                render={(props) => <ArticlePage {...props} image={`article1`} title={`Party in a Singapour`} />}
                />  
            <Route 
                exact 
                path="/article2" 
                render={(props) => <ArticlePage {...props} image={`article2`} title={`Clubbing all night`} />}
                />
            <Route 
                exact 
                path="/article3" 
                render={(props) => <ArticlePage {...props} image={`article3`} title={`Technology in 2021`} />}
                />
            <Route 
                exact 
                path="/article4" 
                render={(props) => <ArticlePage {...props} image={`article4`} title={`How to plan 24h in Berlin`} />}
                />
            <Route 
                exact 
                path="/article5" 
                render={(props) => <ArticlePage {...props} image={`article5`} title={`Best playlist for summer 2020`} />}
                />
            <Route 
                exact 
                path="/article6" 
                render={(props) => <ArticlePage {...props} image={`article6`} title={`Big review of Cannes 2019`} />}
                />   
        </React.Fragment>

    )
};

export default ArticlesRoute