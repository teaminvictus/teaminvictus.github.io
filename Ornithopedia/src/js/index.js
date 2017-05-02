/**
 * Created by pratikgarala on 10/4/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory, hashHistory} from 'react-router';

import Preloader from './components/preloader';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/landingPage';
import LandingPageContainer from './containers/landingPage_container';
import FindTreesContainer from './containers/trees_container';
import FindBirdsContainer from './containers/birds_container';
import BirdDetailContainer from './containers/birdDetail_container';
import TreeDetail from './components/treeDetail';
import BirdIdentifierContainer from './containers/birdIdentifier_container';
import BTMatrixContainer from './containers/btMatrix_container';




const main = (
    <Provider store={store} >
        <Router history={BrowserHistory}>
            <div className="rootDiv">
                <Preloader/>
                <NavigationBar/>
                <Route path="/" exact={true} component={LandingPageContainer} />
                <Route path="/birdFinder" exact={true} component={FindBirdsContainer} />
                <Route path="/birdFinder/:bird_Id"  exact={true} component={BirdDetailContainer} />
                <Route path="/treeFinder"  exact={true} component={FindTreesContainer} />
                <Route path="/treeFinder/:tree_Id"  exact={true} component={TreeDetail} />
                <Route path="/birdIdentifier"  exact={true} component={BirdIdentifierContainer} />
                <Route path="/matrix"  exact={true} component={BTMatrixContainer} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(main, document.getElementById('root'));