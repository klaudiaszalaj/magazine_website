import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/Start';
import MyNavbar from './components/MyNavbar';
import Homepage from './components/Homepage';
import Articles from './components/Articles';
import AuthorPage from './pages/AuthorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Meetings from './pages/Meetings';
import ArticlesRoute from './ArticlesRoute';
import Footer from './components/Footer';



function App() {
    return (
        <BrowserRouter>
            <div style={{padding: 0}} className="container-fluid">
                <Start />
                <MyNavbar />
                <Switch>
                    <Route  path="/author-page" component={AuthorPage} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/register" component={Register} />
                    <Route  path="/articles" component={Articles} />
                    <Route  path="/meetings" component={Meetings} />
                    <Route exact path="/" component={Homepage} />
                    <ArticlesRoute />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>  
    );
}

export default App;
