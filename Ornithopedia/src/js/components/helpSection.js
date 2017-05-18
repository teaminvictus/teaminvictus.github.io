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
                            <div className="col-lg-6 col-md-6 col-sm-12 res-margin">
                                <h3>Bird-Friendly Backyard</h3>
                                <p>The bird’s shelter and food source are decreasing over the years because of
                                    human activity, such as urbanization, agriculture activities, deforestation, etc.
                                    Without food and shelter, the bird cannot survive.  You could help the birds by planting
                                    tree and plant that provide them a food source and nesting location. You need to create a
                                    multi-layered habitat of ground covers, small and medium shrubs, and trees that provide food
                                    and shelter locations all year for a variety of species.
                                </p>
                                <p>
                                    These plant species need to have diverse structures and should be close together to form dense, protective thickets, including climbers within medium-to-tall shrubs and trees, nectar-bearing, and seed-bearing plants. Mulch can also encourage insect life for insectivorous birds. Plants should also be local species that grow naturally in the area and are suited to the climate. Native birds that live in the area will then visit your garden as another food source in their territory.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/*<!-- Responsive video -->*/}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/wHyIzulXYlA"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Panel 1 ends -->*/}

                    {/*<!-- Panel 2 -->*/}
                    <div id="pane2" className="paneltab tab-pane fade">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 res-margin">
                                <h3>Planting Trees</h3>
                                <p>Planting trees are the best approach to attracting birds. All trees and shrubs will provide something of value to birds — nesting sites, insect food, shelter from weather and predators.  There are, without a doubt, birds in your garden now. If you wish to encourage more birds and more varieties of birds around your home, you can do so by providing a variety of trees and shrubs, particularly those that provide food in the form of fruit, berries, nuts or seeds.
                                    Enticing birds to your garden with desirable fruit and seeds will help greatly in controlling insect populations, as most birds prefer a varied diet. The importance of insect control by birds can hardly be overrated. Robins may take garden-friendly earthworms but also feast on ants, beetles, cankerworms, caterpillars, cutworms, crickets, flies (pupae and adults), slugs, snails, sowbugs, spiders, termites, wireworms, and weevils. Wood warblers are almost 100 per cent insect eaters.
                                    In bringing birds to your garden, you add a new dimension of interest and will be rewarded by their color, movement, and song. The trees and shrubs will enhance your garden so there is a double benefit.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/*<!-- Responsive video -->*/}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/7OR8GYjrX4k"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Panel  3 -->*/}
                    <div id="pane3" className="paneltab tab-pane fade text-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 res-margin">
                                <h3>Place a bird feeder</h3>
                                <p>Bird feeders come in a wide range of sizes, styles and designs, but the new
                                    feeder you choose isn’t always one that will be most attractive to the birds.
                                    Knowing how to attract birds to a new feeder will help them transition from one
                                    feeder to another so you can add to your backyard buffet in whatever style you choose.
                                </p>
                                <p>
                                    As any backyard birder knows, a single bird feeder is rarely adequate
                                    once you get hooked on feeding the birds. Whether you are choosing a larger
                                    feeder to accommodate more birds, getting different types of feeders for different
                                    types of seed or just adding more feeders for a growing flock, it is important to choose a
                                    style that will be attractive to birds. Characteristics to consider include:

                                </p>
                                <p className="bulletPoints">

                                    <br/>
                                    •	   Visibility so birds will notice the new feeder and see the seed
                                    <br/>
                                    •	   Appropriate feeding ports for seed type and bird species
                                    <br/>
                                    •	   Multiple perches or platforms to accommodate many birds
                                    <br/>
                                    •	   Feeder capacity and refill frequency expectations
                                    <br/>
                                    •	   Pest-resistant features, such as built-in baffles or no-chew construction
                                </p>
                                <p>
                                    Feeders also come in a wide range of decorative styles,
                                    from natural designs to miniature buildings to artistic abstract shapes.
                                    Whatever type of feeder you choose, however, it can take time for birds to become
                                    accustomed to it and feed willingly.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/*<!-- Responsive video -->*/}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jH0425VzERs"></iframe>
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