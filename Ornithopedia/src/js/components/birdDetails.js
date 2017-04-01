/**
 * Created by pratikgarala on 16/1/17.
 */
import React from 'react';


const BirdDetails = () => (
    <div className="portfolio-modal modal fade" id={this.props.bird.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                    <div className="rl">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="modal-body">
                            <h2>{portfolio.title}</h2>
                            <hr className="star-primary" />
                            <img src={this.props.bird.thumbnailUrl} className="img-responsive img-centered img-shadow" alt="" />
                            <p>{this.props.bird.commonName}</p>
                            <ul className="list-inline item-details">
                                <li>Client:
                                    {/*<strong><a href="#">{portfolio.client}</a>*/}
                                    {/*</strong>*/}
                                </li>
                                <li>Date:
                                    {/*<strong><a href="#">{portfolio.date}</a>*/}
                                    {/*</strong>*/}
                                </li>
                                <li>Service:
                                    {/*<strong><a href="#">{portfolio.service}</a>*/}
                                    {/*</strong>*/}
                                </li>
                            </ul>
                            {/*<h5> Link: <strong><a href={portfolio.link}>{portfolio.title}</a></strong> </h5>*/}
                            <button type="button" className="btn btn-default" data-dismiss="modal">
                                <i className="fa fa-times"></i> Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BirdDetails;