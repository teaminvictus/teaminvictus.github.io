/**
 * Created by pratikgarala on 11/4/17.
 */
import React from 'react';

import store from '../store/store';

import MainSlider from "./mainSlider";
import FeatureSection from './featureSection';
import HelpSection from './helpSection';
import OurStats from './ourStats';
import Footer from './footer';

require("jquery");


require("bootstrap-webpack");
require("bootstrap");
require("font-awesome-webpack");
require("../../fonts/font-awesome/css/font-awesome.min.css");
require("../../fonts/flaticons/flaticon.css");
require("../../css/normalize.css");
require("../../css/preloader.css");
require("../../css/navigationBar.css");
require("../../css/mainSlider.css");
require("../../css/featureSection.css");
require("../../css/font.css");
require("../../css/animate.css");
require("../../css/yellowpaws.css");
require("../../css/birdFinder.css");
require("../../css/birdDetail.css");
require("../../css/treeFinder.css");
require("../../css/birdIdentifier.css");
require("../../css/helpSection.css");
require("../../fonts/flaticons/flaticon.css");
require("../../css/ourStats.css");
require("../../css/footer.css");
require("../../css/btMatrix.css");


class LandingPage extends React.Component {

    componentDidMount() {
        if(store.getState().birds.birds == null){
            // this.props.onGetBirds();
        }
    }


    render() {
        return (
            <div className="rootDiv">
                {
                    new WOW().init()
                }
                <MainSlider/>
                <FeatureSection/>
                <OurStats/>
                <HelpSection/>
                <Footer/>
            </div>
        );
    }
}

require("../js/main");
require("../../vendor/materialize/js/materialize");

export default LandingPage;