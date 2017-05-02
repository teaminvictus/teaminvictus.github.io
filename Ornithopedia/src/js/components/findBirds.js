import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import store from '../store/store';

const IMAGES_PER_PAGE = 8;

export default class FindBirds extends React.Component {


    constructor() {
        super();
        this.state = {
          activePage: 1
        };
    }


    componentDidMount() {
        if(store.getState().birds.birds == null){
            this.props.onGetBirds();
        }
    }

    handlePageChange(pageNumber) {
        var birdsForPage = this.props.birds.matchBirds.slice(
            (pageNumber - 1) * IMAGES_PER_PAGE,
            (((pageNumber - 1) * IMAGES_PER_PAGE ) + IMAGES_PER_PAGE) > this.props.birds.matchBirds.length ? this.props.birds.matchBirds.length : (((pageNumber - 1) * IMAGES_PER_PAGE ) + IMAGES_PER_PAGE));
        this.setState({activePage: pageNumber});

        this.props.onChangeBirdsForPage(birdsForPage);

    }

    render() {
    const birds = this.props.birds.matchBirds;
    const birdCount = birds && birds.length;
    const birdsForPage = this.props.birds.birdsForPage;
    return (
    <section id="birdFinder">
        <div className="searchBar">
            <div className="container">
                <form >
                    <input type="text"  placeholder="Enter Bird Name..." onChange={() => {this.props.onDisplayMatches()}} />
                </form>
            </div>
        </div>


        <div id="birdImages">
            <center>
                {birdsForPage && birdsForPage.length > 0 ? (
                    <div>
                        {birdsForPage.map((bird, index) => {

                            if(bird.isImageAvailable == 1){
                                var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
                            }else{
                                var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
                            }
                            {/*console.log(birdUrl);*/}
                            return (
                                <div key={bird.birdId} className="card image-item">
                                    {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                    <Link to={"/birdFinder/" + bird.birdId} >
                                        {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                                        <div className="image-link">
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <i className="fa fa-search-plus fa-3x"/>
                                                </div>
                                            </div>
                                            <img src={birdUrl} height="200" width="300"/>
                                            <div className="title">
                                                <span>{bird.commonName}</span>
                                            </div>
                                        </div>
                                        {/*</a>*/}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </center>
        </div>
        <div id="birdPagination">
            <center>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={IMAGES_PER_PAGE}
                    totalItemsCount= {birdCount}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </center>
        </div>
    </section>
    );
    }
    }

