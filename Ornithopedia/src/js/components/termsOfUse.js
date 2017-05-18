/**
 * Created by pratikgarala on 6/5/17.
 */

import React from 'react';
import Footer from './footer';


const TermsOfUse = () => (

    <section id="termsOfUse">
        <div className="col-lg-8 col-lg-offset-2">
            {/*<!-- Section Heading -->*/}
            <div className="section-heading">
                <h2>Terms Of Use</h2>
                <div className="hr"></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-left">
                    <p>
                        The Onithopedia encourages the dissemination and exchange the information
                        provided by the website on an open basis.
                        However, the Onithopedia owns the copyright of:
                    </p>
                    <br/>
                    <p>
                        <ul>
                            <li>Onithopedia logo</li>
                            <li>content provided by third parties, and</li>
                            <li>other materials not provided under a Creative Attribution 4.0 license.</li>
                        </ul>
                        <br/>
                        <b>Third Party Copyright</b>
                        <br/>
                        Where a third party holds copyright in material presented on this website, the
                        copyright remains with that party. The permission may be required to use the
                        material and you should contact them directly.
                        <br/>
                        <br/>
                        <b>Social Media Channels</b>
                        <br/>
                        The Onithopedia integrates social media for users to communicating and sharing
                        information, including Google account, Facebook and Youtube channels. Material
                        provided by any person other than the Onithopedia is deemed to be made available
                        you by that person under a Creative Commons Attribution 4.0 International license
                        as a condition of use of that channel.
                    </p>
                    <br/>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
);

export default TermsOfUse;