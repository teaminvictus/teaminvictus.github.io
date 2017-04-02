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
            <div className="row">
                <div className="col-lg-12">
                    <div className="col-lg-5 col-lg-offset-1">
                        <p className="description">
                            Australia's natural environment has experienced a large-scale change in the past century.
                            Coastal areas rich with native animals and plants have been significantly impacted by the urbanization which continues to expand.
                            This change resulted into vastly different ecology within an environment that is no longer able to support many native animals and plants.
                            The Regent Honeyeater, the Hooded Plover, the Australasian Bitterns, the Australian Painted Snipe, the Swift Parrot, the Orange-bellied Parrot are small samples of the Australian birds threatened with extinction.
                            Habitat destruction and fragmentation, animal and plant invasion have all combined to threatened these species and more.
                            If Aussie bird becomes extinct, we not only lose their wonderful natural beauty but also lose the balance of the ecosystem.
                            Animals and plants depend on these birds will become threaten.
                        </p>
                        <p className="description">
                            The good news is that you can help restore some of the balance in your local area.
                            By creating a bird-friendly environment in your backyard and neighborhood, you can share your space with these birds.
                            Take action and help prevent this birds and many other species from ending up in endangered list.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <br />
                        <div className="" id="map">
                            <div className="tooltip tooltip-east">
                                <span className="tooltip-item"></span>
                                <div className="tooltip-content">
                                    <img src={qld} width="150" height="150"/>
                                    <span>The Regent Honeyeater is one of the endangered bird in the Queensland!!</span>
                                </div>
                            </div>
                            <div className="tooltip tooltip-east">
                                <span className="tooltip-item"></span>
                                <div className="tooltip-content">
                                    <img src={nsw} width="150" height="150"/>
                                    <span>The Hooded Plover is critically endangered bird in the New South Wales!!</span>
                                </div>
                            </div>
                            <div className="tooltip tooltip-east">
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
                            <div className="tooltip tooltip-east">
                                <span className="tooltip-item"></span>
                                <div className="tooltip-content">
                                    <img src={tas} width="150" height="150"/>
                                    <span>The Swift Parrot is one of the endangered bird in the Tasmania..!!</span>
                                </div>
                            </div>
                            <div className="tooltip tooltip-west">
                                <span className="tooltip-item"></span>
                                <div className="tooltip-content">
                                    <img src={sa} width="150" height="150"/>
                                    <span>The Orange-bellied Parrot is the most endangered bird in the South Australia..!!</span>
                                </div>
                            </div>
                            <div className="tooltip tooltip-west">
                                <span className="tooltip-item"></span>
                                <div className="tooltip-content">
                                    <img src={nt} width="150" height="150"/>
                                    <span>Grey Currawong is critically endangered bird in the Norther Territory..!!</span>
                                </div>
                            </div>
                            <div className="tooltip tooltip-west">
                                <span className="tooltip-item"></span>
                                <div className="tooltip-content">
                                    <img src={wa} width="150" height="150"/>
                                    <span>Western Ground Parrot is critically endangered bird in the Western Australia..!!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);



export default Map;