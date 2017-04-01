/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

require("../js/headerImages");

const Header = () => (

      <section id="secHeader" className="demo">
          <div className="container">
              <div className="intro-text">
                  <span className="name">Ornithopedia</span>
                  <span>Get Involved With Birds</span>
                  <div id="images" />
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <p>
                          Discover Australia’s bird life and important places for birds and nature
                          <br />
                          Find out what kind of bird near by?
                          <br/>
                          and what you can do to save them.
                          <br/>
                          {/*<h5>Click below button to know more..!!</h5>*/}
                      </p>
                  </div>
              </div>
          </div>
          <a href="#section_map"><span></span>Know More</a>
      </section>
);

export default Header;