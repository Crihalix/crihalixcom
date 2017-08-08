import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Content from './components/Content';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';

import NewsIT from './pages/NewsIT';
import Charts from './pages/Charts';
import Portfolio from './pages/Portfolio';
import PortfolioItem from './pages/PortfolioItem';
import NotFound from './pages/NotFound';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: false
        };

        this.handlerToggleMenu = this.handlerToggleMenu.bind(this);
    }

    handlerToggleMenu() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        }, () => console.log(this.state.toggleMenu));
    }

    render() {
        return (
            <div className="body-wrapper">
                <Header />

                <Content statusMenu={this.state.toggleMenu}>
                    <Sidenav statusMenu={this.state.toggleMenu} onToggleMenu={this.handlerToggleMenu}/>
                    <Switch>
                        <Route exact path="/" component={Home} /> 
                        <Route path="/about" component={About} /> 
                        <Route path="/blog" component={Blog} /> 
                        <Route path="/login" component={Login} /> 
                        <Route path="/charts" component={Charts} /> 
                        <Route path="/news-it" component={NewsIT} /> 
                        <Route exact path="/portfolio" render={() => <Portfolio data={this.props.portfolio} />} /> 
                        {/*<PrivateRoute path="/portfolio/:item" component={PortfolioItem} data={this.props.portfolio} /> */}
                        <Route path="/portfolio/:item" render={props => <PortfolioItem data={this.props.portfolio} {...props} />} /> 
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);