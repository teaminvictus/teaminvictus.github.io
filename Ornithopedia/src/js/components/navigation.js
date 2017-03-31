/**
 * Created by pratikgarala on 20/3/17.
 */

import React from 'react';



const Navigation = () => (
    <div>
        <div className="open">
            <span className="cls"></span>
            <span>
                <ul className="sub-menu">
                    /* Home, Map of Bird, Bird Finder, Bird Identifier*/
                    <li> <a id="homeLink" href="#">Home</a> </li>
                    <li> <a id="mapOfBirdsLink" href="#mapOfBirds">Map</a> </li>
                    <li> <a id="birdFinderLink" href="#birdFinder">Bird Finder</a> </li>
                    <li> <a id="birdIdentifierLink" href="#birdIdentifier">Bird Identifier</a> </li>
                    {/*<li> <a id="projectsLink" href="#projects">Projects</a> </li>*/}
                    {/*<li> <a id="contactLink" href="#contact">Contact</a> </li>*/}
                </ul>
            </span>
            <span className="cls"></span>
        </div>
    </div>
);

export default Navigation;