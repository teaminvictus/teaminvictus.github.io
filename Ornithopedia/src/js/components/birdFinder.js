/**
 * Created by pratikgarala on 28/3/17.
 */
import React from 'react';

require("../../css/birdFinder.css");

const BirdFinder = () => (
    <section id="birdFinder">
        <center>
            <div className="container">
                <div className="box">
                    <div className="container-1">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input type="search" id="searchBird" placeholder="Search Bird..." />
                    </div>
                </div>
            </div>
        </center>
    </section>
);

export default BirdFinder;