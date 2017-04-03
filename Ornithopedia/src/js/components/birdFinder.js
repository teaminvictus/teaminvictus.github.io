/**
 * Created by pratikgarala on 28/3/17.
 */
import React, {Component} from 'react';

require("../js/findBirds");

class BirdFinder extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <section id="birdFinder" className="hideElement">
                <div className="container">
                    <form id="searchForm" className="search-form">
                        <input type="text" className="search" placeholder="Enter Bird Name..." />
                    </form>
                </div>

                <center>
                    <div id="birdImages">
                    </div>
                </center>
            </section>
        );
    }
}


export default BirdFinder;