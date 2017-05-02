/**
 * Created by pratikgarala on 14/4/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';

const birdIdentifier = require("../../images/Birds/birdIdentifier.jpg");
const birdFinder = require("../../images/Birds/birdFinder.jpg");
const treeFinder = require("../../images/Birds/treeFinder.jpg");

const FeatureSection = () => (
    <section id="features" className="home-section">
        <div className="col-lg-8 col-lg-offset-2">
            {/*<!-- Section heading -->*/}
            <div className="section-heading">
                <h2>Our Features</h2>
                <div className="hr"></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {/*<!-- item 1-->*/}

                <div className="col-md-4 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                    <Link to="/birdIdentifier" >
                        <div className="img-wrapper">
                            <img src={birdIdentifier} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h4>Bird Identifier</h4>
                    <p className="margin">
                        Identify strange and unknown birds around your neighbourhood.
                    </p>
                </div>


                {/*<!-- item 2-->*/}
                <div className="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.2s">
                    <Link to="/birdFinder" >
                        <div className="img-wrapper">
                            <img src={birdFinder} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h4>Bird Finder</h4>
                    <p className="margin">
                        Discover more about birds by searching them by their name.
                    </p>
                </div>

                {/*<!-- item 3-->*/}
                <div className="col-md-4 col-sm-12 wow fadeInRight" data-wow-delay="0.2s">
                    <Link to="/treeFinder" >
                        <div className="img-wrapper">
                            <img src={treeFinder} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h4>Tree Finder</h4>
                    <p>
                        Find out about native trees that can attract birds.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default FeatureSection;