/**
 * Created by pratikgarala on 13/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';

const logo1 = require("../../images/OnithoPedia1.png");
const logo2 = require("../../images/OnithoPedia2.png");

const NavigationBar = () => (
    <nav className="navbar navbar-custom navbar-fixed-top">
        {/*<!-- Start Top Bar -->*/}
        <div className="container">
            {/*<!-- navbar -->*/}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i className="fa fa-bars"></i>
                </button>
                {/*<!-- Logo -->*/}
                <div className="page-scroll">
                    <Link to="/">
                        <div className="navbar-brand">
                            {/*<!--Font Icon logo and text -->*/}
                            <img src={logo2} width="75" height="55"/>
                            <img src={logo1} width="150" height="40"/>
                            {/*<span className="flaticon-animals-allowed"></span>Happy Paws*/}
                        </div>
                    </Link>
                </div>
            </div>
            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav page-scroll">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/matrix">Matrix</Link></li>
                    <li><Link to="/birdIdentifier">Bird Identifier</Link></li>
                    <li><Link to="/birdFinder">Bird Finder</Link></li>
                    <li><Link to="/treeFinder">Tree Finder</Link></li>
                    <li><Link to="/recordSightings">Record Sightings</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/*<li><a href="#gallery">Birds in Backyard</a></li>*/}

                    {/*<li><Link to="/about">About</Link></li>*/}
                    {/*<li><Link to="/login">Login</Link></li>*/}
                </ul>
            </div>
        </div>
    </nav>
);

export default NavigationBar;

