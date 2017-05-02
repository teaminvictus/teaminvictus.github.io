/**
 * Created by pratikgarala on 30/4/17.
 */
import React from 'react';

const postcodes = this.props.postcodes.matchPostcodes;
const PickLocation = () => (
    <div id= "pickLocation">
        <div className="btStepsTitle">
            <div className="col-lg-8 col-lg-offset-2">
                {/*<!-- Section Heading -->*/}
                <div className="section-heading">
                    <h2>Pick Your Location</h2>
                    <div className="hr"></div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="col-lg-12">
                <form >
                    <input id="postcodeInput" type="text"  placeholder="Enter Suburb Name..." onChange={() => {this.props.onDisplayMatches()}} autoComplete="off"/>
                    {postcodes && postcodes.length > 0 ? (
                        <ul className="suggestions">
                            {postcodes.map((postcode, index) => {
                                return (
                                    <li key={postcode.id} onClick={() => this.props.onSelectPostcode(postcode)}>
                                                        <span>
                                                            {postcode.suburb} , {postcode.state}, {postcode.postcode}
                                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                </form>
            </div>
        </div>
    </div>
);

export default PickLocation;