/**
 * Created by pratikgarala on 16/3/17.
 */
import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Map from '../components/map';
import MapOfBirds from '../components/mapOfBirds';
import BirdFinder from '../components/birdFinder';
import BirdIdentifier from  '../components/birdIdentifier';

require("jquery");
require("bootstrap-webpack");
require("font-awesome-webpack");
require("../../css/navigation.css");
require("../../css/header.css");
require("../../css/map.css");
require("../../css/normalize.css");
require("../../css/tooltip-curved.css");
require("../js/navigation");
require("../js/landingpage");
require("../../css/birdFinder.css");


const App = () => (

    <div>
        <Navigation/>
        <div id="landingPage" >
            <Header/>
            <Map/>
        </div>
        <MapOfBirds/>
        <BirdFinder/>
        <BirdIdentifier/>
    </div>
);

require("../js/map");
export default App;