/**
 * Created by pratikgarala on 10/4/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {BrowserHistory, hashHistory} from 'react-router';

import Preloader from './components/preloader';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/landingPage';
import LandingPageContainer from './containers/landingPage_container';
import FindTreesContainer from './containers/trees_container';
import FindBirdsContainer from './containers/birds_container';
import BirdDetailContainer from './containers/birdDetail_container';
import TreeDetailContainer from './containers/treeDetail_container';
import BirdIdentifierContainer from './containers/birdIdentifier_container';
import BTMatrixContainer from './containers/btMatrix_container';
import RecordSightingsContainer from './containers/recordSightings_container';
import About from './components/about';
import TermsOfUse from './components/termsOfUse';
import PrivacyPolicies from './components/privacyPolicies';



const main = (
    <Provider store={store} >
        <Router>
            <div className="rootDiv">
                <Preloader/>
                <NavigationBar/>
                <Route path="/" exact={true} component={LandingPageContainer} />
                <Route path="/birdFinder" exact={true} component={FindBirdsContainer}/>
                <Route path="/birdFinder:bird_Id" exact={true} component={BirdDetailContainer} />
                <Route path="/treeFinder"  exact={true} component={FindTreesContainer} />
                <Route path="/treeFinder:tree_Id"  exact={true} component={TreeDetailContainer} />
                <Route path="/birdIdentifier"  exact={true} component={BirdIdentifierContainer} />
                <Route path="/matrix"  exact={true} component={BTMatrixContainer} />
                <Route path="/recordSightings"  exact={true} component={RecordSightingsContainer} />
                <Route path="/about"  exact={true} component={About} />
                <Route path="/termsOfUse"  exact={true} component={TermsOfUse} />
                <Route path="/privacyPolicy"  exact={true} component={PrivacyPolicies} />
                {/*<Footer/>*/}
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(main, document.getElementById('root'));