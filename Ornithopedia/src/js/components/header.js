/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

require("../js/headerImages");

const Header = () => (
  <div>
      {/*<!-- Header -->*/}
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-text">
                          <span className="name">Ornithopedia</span>
                          <span>Know About Surrounding Birds</span>
                          <div id="images">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
  </div>
);

export default Header;