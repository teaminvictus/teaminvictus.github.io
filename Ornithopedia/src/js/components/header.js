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
                  <span>Get Involve Birds</span>
                  <div id="images" />
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <p>
                          Are you a bird Lover?
                          <br />
                          Do you want to know what kind of birds near by?
                          <br/>
                          Find out about them and help them to increase their biodiversity.
                          <br/>
                          {/*<h5>Click below button to know more..!!</h5>*/}
                      </p>
                  </div>
              </div>
          </div>
          <a href="#section_map"><span></span>More</a>
      </section>
);

export default Header;