/**
 * Created by pratikgarala on 28/4/17.
 */
import React from 'react';


const HelpSection = () => (

    <section id="helpSection" className="home-section">
        <div className="col-lg-8 col-lg-offset-2">
            {/*<!-- Section Heading -->*/}
            <div className="section-heading">
                <h2>How can you help</h2>
                <div className="hr"></div>
            </div>
        </div>
        <div className="col-md-12 col-sm-12 col-centered">
            <div className="centered-pills">
                {/*<!-- Navigation -->*/}
                <ul className="nav nav-pills">
                    <li className="active"><a href="#pane1" data-toggle="tab">Bird Friendly Backyard</a></li>
                    <li><a href="#pane2" data-toggle="tab">Plant Trees</a></li>
                    <li><a href="#pane3" data-toggle="tab">Place Bird feeder</a></li>
                </ul>
            </div>
        </div>
        <div className="container">
            {/*<!-- Panels start -->*/}
            <div className="tabbable">
                <div className="tab-content">
                    {/*<!-- Panel  1 -->*/}
                    <div id="pane1" className="paneltab tab-pane fade active in">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="col-lg-7 col-md-6 col-sm-12 res-margin wow fadeInRight" data-wow-delay="0.2s">
                                    <h3>We take care of your best friend</h3>
                                    <p>Interdum donec eget metus auguen unc vel mauris ultricies, vest ao ibulum orci eget,  blandit quam elit, eu imperdiet neque semper lorem ipsum dolores viverra elit Aliquam erat volutpat phase llus ac sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm.
                                        Sed in lobortis nisl Phasellus ultrices gravida massa luctus ornare. Aliquam erat volutpat phas ellus sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm Pellentesque turpis lectus, placerat a ultricies a, posuere lorem ipsuet.</p>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                                    <img src="img/about.png" alt="" className="img-responsive"/>
                                </div>
                            </div>
                            {/*<!-- icons -->*/}
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <div className="image"><span className="flaticon-sparrow"/></div>
                                        <h5>High Tech Clinic</h5>
                                        <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <div className="image"><span className="flaticon-dove"/></div>
                                        <h5>Amazing Support</h5>
                                        <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <div className="image"><span className="flaticon-eagle"/></div>
                                        <h5>Award Winner</h5>
                                        <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Panel 1 ends -->*/}

                    {/*<!-- Panel 2 -->*/}
                    <div id="pane2" className="paneltab tab-pane fade">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 res-margin">
                                <h3>Our Philosophy</h3>
                                <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.
                                    Sed in lobortis nisl Phasellus ultrices gravida massa luctus ornare ellen tesque turpis lectus,
                                    placerat a ultricies a, posuere a nibh fusce mollis imperdiet interdum donec eget metus auguen unc vel
                                    mauris ultricies, vestibulum orci eget, viverra elit. Aliquam erat volutpat. Phasellus ac sodales felis tiam
                                    non metus aliquam eros accumsan mollis eget vitae tellusm.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/*<!-- Responsive video -->*/}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/deN3nt3Sdhc"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Panel  3 -->*/}
                    <div id="pane3" className="paneltab tab-pane fade text-center">
                        <div className="row">
                            <h3>Meet our Team</h3>
                            {/*<!-- Item 1 -->*/}
                            <div className="team">
                                <div className="col-md-3 col-sm-6">
                                    <div className="img-wrapper">
                                        <img src="img/team1.jpg" alt="" className="img-responsive"/>
                                    </div>
                                    {/*<!-- Caption -->*/}
                                    <div className="caption-team">
                                        <h5>Luane Silva </h5>
                                        <span>Veterinarian</span>
                                        <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                    </div>
                                    {/*<!-- Social icons -->*/}
                                    <div className="social-media margin">
                                        <a href="#" title=""><i className="fa fa-twitter"/></a>
                                        <a href="#" title=""><i className="fa fa-facebook"/></a>
                                        <a href="#" title=""><i className="fa fa-linkedin"/></a>
                                        <a href="#" title=""><i className="fa fa-pinterest"/></a>
                                        <a href="#" title=""><i className="fa fa-instagram"/></a>
                                    </div>
                                </div>
                                {/*<!-- Item 2 -->*/}
                                <div className="col-md-3 col-sm-6">
                                    <div className="img-wrapper">
                                        <img src="img/team2.jpg" alt="" className="img-responsive"/>
                                    </div>
                                    {/*<!-- Caption -->*/}
                                    <div className="caption-team">
                                        <h5>John Suen</h5>
                                        <span>Caretaker</span>
                                        <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                    </div>
                                    {/*<!-- Social icons -->*/}
                                    <div className="social-media margin">
                                        <a href="#" title=""><i className="fa fa-twitter"/></a>
                                        <a href="#" title=""><i className="fa fa-facebook"/></a>
                                        <a href="#" title=""><i className="fa fa-linkedin"/></a>
                                        <a href="#" title=""><i className="fa fa-pinterest"/></a>
                                        <a href="#" title=""><i className="fa fa-instagram"/></a>
                                    </div>
                                </div>
                                {/*<!-- item 3 -->*/}
                                <div className="col-md-3 col-sm-6">
                                    <div className="img-wrapper">
                                        <img src="img/team3.jpg" alt="" className="img-responsive"/>
                                    </div>
                                    {/*<!-- Caption -->*/}
                                    <div className="caption-team">
                                        <h5>Nancy May</h5>
                                        <span>Specialist</span>
                                        <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                    </div>
                                    {/*<!-- Social icons -->*/}
                                    <div className="social-media margin">
                                        <a href="#" title=""><i className="fa fa-twitter"/></a>
                                        <a href="#" title=""><i className="fa fa-facebook"/></a>
                                        <a href="#" title=""><i className="fa fa-linkedin"/></a>
                                        <a href="#" title=""><i className="fa fa-pinterest"/></a>
                                        <a href="#" title=""><i className="fa fa-instagram"/></a>
                                    </div>
                                </div>
                                {/*<!-- Item 4 -->*/}
                                <div className="col-md-3 col-sm-6">
                                    <div className="img-wrapper">
                                        <img src="img/team4.jpg" alt="" className="img-responsive"/>
                                    </div>
                                    {/*<!-- Caption -->*/}
                                    <div className="caption-team">
                                        <h5>Amelie Plin</h5>
                                        <span>Veterinarian</span>
                                        <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                    </div>
                                    {/*<!-- Social icons -->*/}
                                    <div className="social-media">
                                        <a href="#" title=""><i className="fa fa-twitter"/></a>
                                        <a href="#" title=""><i className="fa fa-facebook"/></a>
                                        <a href="#" title=""><i className="fa fa-linkedin"/></a>
                                        <a href="#" title=""><i className="fa fa-pinterest"/></a>
                                        <a href="#" title=""><i className="fa fa-instagram"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HelpSection;