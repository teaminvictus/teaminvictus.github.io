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
                    <li> <a id="homeLink" href="#">Home</a> </li>
                    <li> <a id="findBirdsLink" href="#findBirds">Find Birds</a> </li>
                    <li> <a id="identifyBirdsLink" href="#identifyBirds">Identify Birds</a> </li>
                    <li> <a id="projectsLink" href="#projects">Projects</a> </li>
                    <li> <a id="contactLink" href="#contact">Contact</a> </li>
                </ul>
            </span>
            <span className="cls"></span>
        </div>
    </div>
);

export default Navigation;