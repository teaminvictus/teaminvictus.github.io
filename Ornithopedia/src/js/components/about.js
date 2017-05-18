/**
 * Created by pratikgarala on 6/5/17.
 */
import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import Footer from './footer';


const className = "fa fa-2x fa-caret-down margin15";
// const className = "fa fa-2x fa-caret-down margin15 collapsible-header";

const About = () => (
        <section id="about">

            <div className="col-lg-8 col-lg-offset-2">
                {/*<!-- Section Heading -->*/}
                <div className="section-heading">
                    <h2>About us</h2>
                    <div className="hr"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <Collapsible popout>

                        <CollapsibleItem header={<div><span className={className} /> Onithopedia Overview </div>} >
                            <p>
                                As an important part of biodiversity, birds are indicators of biodiversity and
                                environmental health. However, based on the finding of Australian Research Council
                                in 2010, human activities have brought many threats to birds. As a result ot that, the
                                birds are facing a critical situation. The Ornithopedia aims to support society to
                                increase the biodiversity of birds. It is designed to allow bird lovers to identify the
                                relationship between surrounding birds and backyard trees, record bird sightings,
                                identify strange and unknown birds. It also provides tips and tricks to invite birds to the backyards.
                                Apart from this, user can look for the particular bird profile or tree profile to get more details about it.
                            </p>
                        </CollapsibleItem>
                        <CollapsibleItem header={<div><span className={className} /> How Does It Work? </div>}>
                            <p>
                                Onithopedia targets the specific audiences with bird lovers who are interested bird
                                habitats and bird life. It provides find sufficient information about birds nearby
                                the bird lovers especially when they want to identify birds nearby them. It also
                                designed to allow users to find tips about how to invite birds to backyard. Beside of
                                that, it developed a platform for bird lovers to build their communities to create
                                projects or events.
                            </p>
                        </CollapsibleItem>
                        <CollapsibleItem header={<div><span className={className} /> What You Could Do Here? </div>}>
                            <p>
                                <ul>
                                    <li>Create Bird Tree Matrix</li>
                                    <li>Share your bird sightings</li>
                                    <li>Identify birds</li>
                                    <li>Search birds nearby you</li>
                                    <li>Learn to invite birds to your backyard</li>
                                    <li>Search Bird Profiles</li>
                                    <li>Search Tree Profile</li>
                                    <li>Bird count trends for specific birds</li>
                                </ul>
                            </p>
                        </CollapsibleItem>
                        <CollapsibleItem header={<div><span className={className} /> Data Integration </div>}>
                            <p>
                                As the Onithopedia is designed as a responsive web application using react and redux, each Onithopedia
                                portal integrates with the data sets from open data sources and users. In this way,
                                the initial bird data sets are generated form open data sources such as e-Bird
                                Australia and Global Biodiversity Information Facility. Additionally, the application
                                also collects data from user’s input when they use the application such as uploading
                                birds’ photos and searching birds.
                            </p>
                        </CollapsibleItem>
                        <CollapsibleItem header={<div><span className={className} /> Meet Our Team </div>}>
                            <div className="text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <img src={require("../../images/team/invictus.png")} width="200"/>
                                        <br/>
                                        <br/>
                                        <h5>Innovative + Victorious = Us</h5>
                                        <br/>
                                        <br/>
                                    </div>
                                    <div className="team">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="img-wrapper">
                                                <img src={require("../../images/team/pratik.png")} alt="" className="img-responsive"/>
                                            </div>
                                            <div className="caption-team">
                                                <h5>Pratik</h5>
                                                <span>Developer</span>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <div className="img-wrapper">
                                                <img src={require("../../images/team/anna.png")} alt="" className="img-responsive"/>
                                            </div>
                                            <div className="caption-team">
                                                <h5>Anna</h5>
                                                <span>Project Manager</span>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <div className="img-wrapper">
                                                <img src={require("../../images/team/rando.png")} alt="" className="img-responsive"/>
                                            </div>
                                            <div className="caption-team">
                                                <h5>Rando</h5>
                                                <span>Business Analyst</span>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <div className="img-wrapper">
                                                <img src={require("../../images/team/steven.png")} alt="" className="img-responsive"/>
                                            </div>
                                            <div className="caption-team">
                                                <h5>Steven</h5>
                                                <span>Database Administrator</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </CollapsibleItem>
                    </Collapsible>
                </div>
                </div>
            </div>
            <Footer/>
        </section>

);

export default About;