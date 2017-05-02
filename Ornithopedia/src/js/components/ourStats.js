/**
 * Created by pratikgarala on 29/4/17.
 */
import React from 'react';


const OurStats = () => (

    <section id="stats" className="home-section">
        <div className="col-lg-8 col-lg-offset-2">
            {/*<!-- Section Heading -->*/}
            <div className="section-heading">
                <h2>Our Stats</h2>
                <div className="hr"></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
                    <div className="col-md-3 col-sm-6 res-margin">
                        {/*<!-- Number 1 -->*/}
                        <div className="numscroller" data-slno='1' data-min='0' data-max='8' data-delay='20' data-increment="19">6</div>
                        <hr />
                        <h5>States</h5>
                    </div>
                    <div className="col-md-3 col-sm-6 res-margin">
                        {/*<!-- Number 1 -->*/}
                        <div className="numscroller" data-slno='1' data-min='0' data-max='8' data-delay='20' data-increment="19">2</div>
                        <hr />
                            <h5>Territories</h5>
                    </div>
                    <div className="col-md-3 col-sm-6 res-margin">
                        {/*<!-- Number 2 -->*/}
                        <div className="numscroller" data-slno='1' data-min='0' data-max='800' data-delay='10' data-increment="9">800+</div>
                        <hr />
                            <h5>Bird Profiles</h5>
                    </div>
                    <div className="col-md-3 col-sm-6 res-margin">
                        {/*<!-- Number 3 -->*/}
                        <div className="numscroller" data-slno='1' data-min='0' data-max='100' data-delay='20' data-increment="19">100+</div>
                        <hr />
                            <h5>Tree Profiles</h5>
                    </div>
                    {/*<div className="col-md-3 col-sm-6">*/}
                        {/*<!-- Number 4 -->*/}
                        {/*<div className="numscroller" data-slno='1' data-min='0' data-max='50' data-delay='10' data-increment="9">0</div>*/}
                        {/*<hr />*/}
                            {/*<h5>Products</h5>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </section>
);

export default OurStats;