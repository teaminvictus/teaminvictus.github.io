/**
 * Created by pratikgarala on 14/4/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';

const birdIdentifier = require("../../images/Birds/birdIdentifier.jpg");
const birdFinder = require("../../images/Birds/birdFinder.jpg");
const treeFinder = require("../../images/Birds/treeFinder.jpg");
const recordSightings = require("../../images/Birds/recordSightings.jpg");
const matrix = require("../../images/Birds/matrix.jpg");
const birdFeeder = require("../../images/Birds/birdFeeders.jpg");

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

                <div className="col-md-4 col-sm-12 wow fadeInUp feature text-center" data-wow-delay="0.2s">
                    <Link to="/matrix" >
                        <div className="img-wrapper">
                            <img src={matrix} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h5>Bird Tree Matrix</h5>
                    <p className="margin">
                        Discover what trees attract what birds and invite those birds to your backyard by planting trees.
                    </p>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInRight feature text-center" data-wow-delay="0.2s">
                    <Link to="/recordSightings" >
                        <div className="img-wrapper">
                            <img src={recordSightings} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h5>Record Sightings</h5>
                    <p>
                        Record a bird sightings of birds found in your backyard. Be a responsible citizen and help your government counting birds number.
                    </p>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInUp feature text-center" data-wow-delay="0.2s">
                    <a href="#helpSection" >
                        <div className="img-wrapper">
                            <img src={birdFeeder} alt="" className="img-responsive"/>
                        </div>
                    </a>
                    <h5>How can you help birds?</h5>
                    <p className="margin">
                        Discover tips and tricks to create bird friendly backyard, planting trees and creating bird feeders.
                    </p>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInLeft feature text-center" data-wow-delay="0.2s">
                    <Link to="/birdIdentifier" >
                        <div className="img-wrapper">
                            <img src={birdIdentifier} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h5>Bird Identifier</h5>
                    <p className="margin">
                        Find more information about strange and unknown birds found in your backyard.
                    </p>
                </div>



                <div className="col-md-4 col-sm-12 wow fadeInUp feature text-center" data-wow-delay="0.2s">
                    <Link to="/birdFinder" >
                        <div className="img-wrapper">
                            <img src={birdFinder} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h5>Bird Finder</h5>
                    <p className="margin">
                        Discover more about birds by searching them by their name.
                    </p>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInRight feature text-center" data-wow-delay="0.2s">
                    <Link to="/treeFinder" >
                        <div className="img-wrapper">
                            <img src={treeFinder} alt="" className="img-responsive"/>
                        </div>
                    </Link>
                    <h5>Tree Finder</h5>
                    <p>
                        Find out about native trees that can attract birds.
                    </p>
                </div>


            </div>
        </div>
    </section>
);

export default FeatureSection;