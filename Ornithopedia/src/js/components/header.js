/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

require("../js/headerImages");
var logo = require("../../images/OnithoPedia.png");

const Header = () => (

      <section id="secHeader" className="">
          <div className="container">
              <div className="row">
                <div className="col-lg-12">
                    <img id="logo" src={logo}/>
                </div>
              </div>
              <div className = "row">
                  <div className="col-lg-12">
                      <div id="images" />
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <p>
                          Australia has an extraordinary array of bird life with more than 2000 species.
                          <br />
                          Unfortunately, many of them are under threat.
                          <br/>
                          The good news is that you can help them.
                          <br/>
                      </p>
                  </div>
              </div>
              <div className = "row demo">
                  <a href="#section_map"><span></span>Know More</a>
              </div>
          </div>

      </section>
);

export default Header;