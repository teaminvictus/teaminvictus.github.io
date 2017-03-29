/**
 * Created by pratikgarala on 28/3/17.
 */
import React from 'react';

require("../js/findBirds");
var image = require("../../images/Birds/1.jpg");

const BirdFinder = () => (
    <section id="birdFinder" className="hideElement">
        <div className="container">
            <form className="search-form">
                <input type="text" className="search" placeholder="Search Bird..." />
            </form>
        </div>

        <center>
            <div id="birdImages">
            </div>
        </center>
    </section>
);

export default BirdFinder;