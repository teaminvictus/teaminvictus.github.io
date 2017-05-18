/**
 * Created by pratikgarala on 6/5/17.
 */
import React from 'react';
import Footer from './footer';


const PrivacyPolicies = () => (

    <section id="privacyPolicy">
        <div className="col-lg-8 col-lg-offset-2">
            {/*<!-- Section Heading -->*/}
            <div className="section-heading">
                <h2>Privacy Policy</h2>
                <div className="hr"></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>
                        This Privacy details Ornithopedia policy regarding any personal information you
                        might supply to us via the Ornithopedia and how the information may be used.
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <ul>
                            <li>
                                This Privacy Policy applies to and should be read in conjunction with the Terms
                                and Conditions of Use which are available on the Ornithopedia Website. By viewing
                                and using the Ornithopedia Website you will be deemed to have agreed to the
                                matters described in this Privacy Policy.
                            </li>
                            <li>
                                Ornithopedia is entitled, at its sole discretion, to amend, add or remove any part of
                                this Privacy Policy at any time without notice. You should periodically review this
                                Privacy Policy to ensure that you are up to date with any such amendments,
                                additions or removals.
                            </li>
                            <li>
                                Ornithopedia is concerned with the protection of your privacy. We support the ten
                                National Privacy Principles contained in the Privacy Act 1998 (Cth).
                            </li>
                            <li>
                                Ornithopedia only collects information about you when you provide
                                it to us. This information including your name, address and email address.
                            </li>
                            <li>
                                Information sent by your web browser may be automatically collected such as
                                your domain name, user name, Internet protocol (IP) address used to connect your
                                computer to the Internet, pages viewed, information searched for, access time,
                                websites visited before and other relevant statistics.
                            </li>
                            <li>
                                You are also able to choose not to provide us your personal information if you do
                                not want to.
                            </li>
                        </ul>
                    </p>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
        <Footer/>
    </section>
);

export default PrivacyPolicies;