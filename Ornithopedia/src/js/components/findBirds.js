import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import store from '../store/store';
import Footer from './footer';
import Preloader from './preloader';

const IMAGES_PER_PAGE = 8;

import endangered from '../../images/Birds/endangered.png';

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

    renderEndangeredStatus(bird){
        if(bird.status.localeCompare("Endangered") == 0){
            return(
                <div className="endangered">
                    <img src={endangered} height="30" width="30" />
                </div>
            );
        }
    }

    renderBirdStatus(bird){
        if(bird.status.localeCompare("Endangered") == 0){
            return(
                <span className="subText endangeredStatus"> {bird.status}</span>
                    );
        }else{
            return(
                <span className="subText"> {bird.status}</span>
            );
        }
    }

    renderFoodSource(bird){
        var foodSource = "";
        if(bird.fruit == 1)
            foodSource = foodSource + "Fruits, ";
        if(bird.insect == 1)
            foodSource = foodSource + "Insects, ";
        if(bird.nectar == 1)
            foodSource = foodSource + "Nectar, ";
        if(bird.seed == 1)
            foodSource = foodSource + "Seed, ";
        if(bird.smallFish == 1)
            foodSource = foodSource + "small fishes, ";

        if(foodSource.length == 0)
            foodSource = "Data Not Available";
        else
            foodSource = foodSource.substr(0,foodSource.length - 2);
        return(
            foodSource
        )
    }

    renderBirdSound(bird){
        if(bird.isSoundAvilable == 1){
            return(
                <div className="col-sm-9">
                    <audio controls>
                        <source src={bird.soundLink} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            );
        }
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
            <div className="text-center">
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
                                    <div className="image-link">

                                        <Link to={"/birdFinder" + bird.birdId} >
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <i className="fa fa-search-plus fa-3x"/>
                                                </div>
                                            </div>
                                            {this.renderEndangeredStatus(bird)}
                                            <img src={birdUrl} height="200" width="300"/>
                                        </Link>
                                        <div className="title">
                                            <span>{bird.commonName}</span>
                                            <div className="hr"></div>
                                            {/*<hr className="star-primary" />*/}
                                            Status: {this.renderBirdStatus(bird)}
                                            <br />
                                            Food Source : {this.renderFoodSource(bird)}
                                            <br/>
                                            {this.renderBirdSound(bird)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : <Preloader/>}
            </div>
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
        <Footer/>
    </section>
    );
    }
    }

