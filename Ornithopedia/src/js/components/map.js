/**
 * Created by pratikgarala on 21/3/17.
 */

/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

var qld = require("../../images/Birds/endangered/QLD.jpg");
var nsw = require("../../images/Birds/endangered/NSW.jpg");
var act = require("../../images/Birds/endangered/ACT.jpg");
var vic = require("../../images/Birds/endangered/VIC.jpg");
var tas = require("../../images/Birds/endangered/TAS.jpg");
var sa = require("../../images/Birds/endangered/SA.jpg");
var wa = require("../../images/Birds/endangered/WA.jpg");
var nt = require("../../images/Birds/endangered/NT.jpg");


const Map = () => (
    <section id="section_map" className="demo">
        <div className="container">
            <div className="intro-text">
                <span className="name">Did you know?</span>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
            <div className="col-lg-7">
                <div className="" id="map">
                    <div className="tooltip tooltip-west">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={qld} width="150" height="150"/>
                            <span>The Regent Honeyeater is one of the endangered bird in the Queensland!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-west">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={nsw} width="150" height="150"/>
                            <span>The Hooded Plover is critically endangered bird in the New South Wales!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-west">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={act} width="150" height="150"/>
                            <span>The Australasian Bitterns is the most endangered bird in the Australian Capital Territory..!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-east">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={vic} width="150" height="150"/>
                            <span>The Australian Painted Snipe is endangered bird in the Victoria..!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-west">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={tas} width="150" height="150"/>
                            <span>The Swift Parrot is one of the endangered bird in the Tasmania..!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-east">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={sa} width="150" height="150"/>
                            <span>The Orange-bellied Parrot is the most endangered bird in the South Australia..!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-east">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={nt} width="150" height="150"/>
                            <span>Grey Currawong is critically endangered bird in the Norther Territory..!!</span>
                        </div>
                    </div>
                    <div className="tooltip tooltip-east">
                        <span className="tooltip-item"></span>
                        <div className="tooltip-content">
                            <img src={wa} width="150" height="150"/>
                            <span>Western Ground Parrot is critically endangered bird in the Western Australia..!!</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="col-lg-5">*/}
                {/*The birds maintain the balance of our world ecosystem. They pollinate plants, scavenge carcasses, disperse seeds, and act as the nutrient source of the earth. The Regent Honeyeater is one of the most astonishing bird in Australia. The bird was found around west to the Riverina region of New South Wales, north as Rockhampton, and south of Melbourne, however, the bird become endangered due to lack of good quality food source.*/}
                {/*<br/>*/}
                {/*Human activity such as agriculture and public housing has put the balance of our nature over the edge. However, we still can contribute to recovering the bird biodiversity. We can start small and start it from our backyard. Planting trees or providing a wild bird with a good quality food source. The Ornithopedia is a web application which aims to support society to increase the biodiversity of birdlife. Our target audience is bird lovers. The application is designed to allow bird lovers to identify their bird sightings, support them to invite birds to visit their backyards, and provide a platform for them to build a community.*/}
            {/*</div>*/}
            </div>
        </div>
    </section>
);



export default Map;