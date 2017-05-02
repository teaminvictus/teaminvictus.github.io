/**
 * Created by pratikgarala on 29/4/17.
 */
import React from 'react';


const Footer = () => (

    <footer>
        <div className="container">
            <div className="row wow fadeInUp" data-wow-delay="0.2s">
                {/*<div className="col-sm-6 col-md-4">*/}
                    {/*<!-- Social Media icons -->*/}
                    {/*<ul className="social-media">*/}
                        {/*<li><a title="Facebook" href="#"><i className="fa fa-facebook"></i></a></li>*/}
                        {/*<li><a title="Twitter" href="#"><i className="fa fa-twitter"></i></a></li>*/}
                        {/*<li><a title="Google Plus" href="#"><i className="fa fa-google-plus"></i></a></li>*/}
                        {/*<li><a  title="Linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                        {/*<li><a  title="Flickr" href="#"><i className="fa fa-flickr"></i></a></li>*/}
                        {/*<li><a  title="Tumblr" href="#"><i className="fa fa-tumblr"></i></a></li>*/}
                        {/*<li><a  title="Instagram" href="#"><i className="fa fa-instagram"></i></a></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
                {/*<!-- Bottom Credits -->*/}
                <div className="col-sm-12 text-center">
                    <p className="text-center">COPYRIGHT © 2017 Ornithopedia</p>
                </div>
            </div>
        </div>
        {/*<!-- Go To Top Link -->*/}
        <div className="page-scroll hidden-sm hidden-xs">
            <a href="#page-top" className="back-to-top"><i className="fa fa-angle-up"/></a>
        </div>
    </footer>
);

export default Footer;