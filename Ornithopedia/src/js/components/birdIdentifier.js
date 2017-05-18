/**
 * Created by pratikgarala on 18/4/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import store from '../store/store';
import Footer from './footer';
import Pagination from 'react-js-pagination';


import bird2 from '../../images/Birds/10.jpg';
import bird3 from '../../images/Birds/11.jpg';
import bird4 from '../../images/Birds/12.jpg';
import bird5 from '../../images/Birds/13.jpg';
import bird6 from '../../images/Birds/6.jpg';
import bird7 from '../../images/Birds/7.jpg';
import endangered from '../../images/Birds/endangered.png';
const IMAGES_PER_PAGE = 4;

export default class BirdIdentifier extends React.Component {

    constructor() {
        super();
        this.state = {
            activePage: 1
        };
    }


    componentDidMount() {

        if(this.props.postcodes.postcodes == null){
            this.props.onGetPostcodes();
            // this.props.onGetAuStates();
        }


        if(this.props.postcodes.selectedPostcode != null){
            $("#postcodeInput").val(this.props.postcodes.selectedPostcode.suburb + ", " + this.props.postcodes.selectedPostcode.state + ", " + this.props.postcodes.selectedPostcode.postcode)
        }

        if(store.getState().birds.birds == null){
            this.props.onGetBirds();
        }
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
        const auStates = this.props.auStates.matchAuStates;
        const postcodes = this.props.postcodes.matchPostcodes;
        var birdsForIdentifier = this.props.birdsForIdentifier.filteredBirdsForIdentifier;
        // const postcodes = [];
        return (
            <section id="birdIdentifier">
                <div className="searchBar">
                    <div className="container">
                        <form >
                            {/*<div className="col-lg-4">*/}
                                {/*<input id="auStateInput" type="text"  placeholder="Enter State Name..." onChange={() => {this.props.onDisplayStatesMatches()}} autoComplete="off"/>*/}

                                {/*{auStates && auStates.length > 0 ? (*/}
                                    {/*<ul id="auStateList" className="suggestions">*/}
                                        {/*{auStates.map((auState, index) => {*/}
                                            {/*return (*/}
                                                {/*<li key={auState.id} id={auState.id} onClick={() => this.props.onSelectAuState(auState)}>*/}
                                                {/*<span>*/}
                                                    {/*{auState.value}*/}
                                                {/*</span>*/}
                                                {/*</li>*/}
                                            {/*);*/}
                                        {/*})}*/}
                                    {/*</ul>*/}
                                {/*) : null}*/}
                            {/*</div>*/}
                            <div className="col-lg-12">
                                <input id="postcodeInput" type="text"  placeholder="Enter Suburb Name or Postcode..." onChange={() => {this.props.onDisplayMatches()}} autoComplete="off"/>
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
                            </div>
                        </form>
                    </div>
                </div>
                {birdsForIdentifier && birdsForIdentifier.length > 0 ? (
                <div id="gallery" className="home-section">
                    <div className="container wow fadeInDown" data-wow-delay="0.2s">
                        <div className="nav-gallery col-md-12">
                            {/*<!-- Navigation -->*/}
                            <ul className="list-inline nav type cat">
                                <li className="active"><a href="#" onClick={() => this.props.onFilterBirdsForIdentifier("")}>All Size</a></li>
                                <li><a href="#" onClick={() => this.props.onFilterBirdsForIdentifier("Small")}>Small</a></li>
                                <li><a href="#" onClick={() => this.props.onFilterBirdsForIdentifier("Medium")}>Medium</a></li>
                                <li><a href="#" onClick={() => this.props.onFilterBirdsForIdentifier("Large")}>Large</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="birdImages">
                        <div className="text-center">
                                <div>
                                    {birdsForIdentifier.map((bird, index) => {
                                        if(bird.isImageAvailable == 1){
                                            var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
                                        }else{
                                            var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
                                        }
                                        {/*var className = "card image-item " + bird.size;*/}
                                        var className = "col-sm-6 col-md-6 col-lg-4 " + bird.size;
                                        {/*console.log(birdUrl);*/}
                                        return (
                                            <div key={bird.birdId} className="card image-item">


                                                {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                                    {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                                                    <div className="image-link">
                                                        <Link to={"/birdFinder" + bird.birdId}>
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
                                                    {/*</a>*/}
                                            </div>
                                        );
                                    })}
                                </div>

                        </div>
                    </div>
                </div>
                ) : <div id="gallery" className="home-section">
                        <div className="col-lg-12 text-center">
                            <h4>Please enter the last seen location of strange or unknown bird.</h4>
                        </div>
                    </div>}

                    {/*{*/}
                        {/*birdsForIdentifier && birdsForIdentifier.length > 0 ? (*/}
                        {/*<div className="carousel">*/}
                        {/*{birdsForIdentifier.map((bird, index) => {*/}

                            {/*if(bird.isImageAvailable == 1){*/}
                                {/*var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");*/}
                            {/*}else{*/}
                                {/*var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");*/}
                            {/*}*/}
                            {/*/!*console.log(birdUrl);*!/*/}
                            {/*return (*/}
                                {/*<a key={bird.birdId} className="carousel-item" href={bird.birdId}>*/}
                                    {/*<div  className="card image-item">*/}
                                        {/*/!*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*!/*/}
                                            {/*<div className="image-link">*/}
                                                {/*<img src={birdUrl} height="200" width="300"/>*/}
                                                {/*<div className="title">*/}
                                                    {/*<span>{bird.commonName}</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*/!*</Link>*!/*/}
                                    {/*</div>*/}
                                {/*</a>*/}
                            {/*);*/}
                        {/*})}*/}
                        {/*</div>*/}
                        {/*) : null*/}
                    {/*}*/}

                    {/*<div className="carousel">*/}
                        {/*<a className="carousel-item" href="#one!" >*/}
                            {/*<div className="card image-item">*/}
                                {/*<div className="image-link">*/}
                                    {/*<img src={bird1} height="200" width="300"/>*/}
                                    {/*<div className="title">*/}
                                        {/*<span>ABC</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</a>*/}
                        {/*<a className="carousel-item" href="#two!">*/}
                            {/*<div className="card image-item">*/}
                                {/*<div className="image-link">*/}
                                    {/*<img src={bird2} height="200" width="300"/>*/}
                                    {/*<div className="title">*/}
                                        {/*<span>ABC</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</a>*/}
                        {/*<a className="carousel-item" href="#three!">*/}
                            {/*<div className="card image-item">*/}
                                {/*<div className="image-link">*/}
                                    {/*<img src={bird3} height="200" width="300"/>*/}
                                    {/*<div className="title">*/}
                                        {/*<span>ABC</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</a>*/}
                        {/*<a className="carousel-item" href="#four!">*/}
                            {/*<div className="card image-item">*/}
                                {/*<div className="image-link">*/}
                                    {/*<img src={bird4} height="200" width="300"/>*/}
                                    {/*<div className="title">*/}
                                        {/*<span>ABC</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</a>*/}
                        {/*<a className="carousel-item" href="#five!">*/}
                            {/*<div className="card image-item">*/}
                                {/*<div className="image-link">*/}
                                    {/*<img src={bird5} height="200" width="300"/>*/}
                                    {/*<div className="title">*/}
                                        {/*<span>ABC</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</a>*/}
                    {/*</div>*/}

                {/*</div>*/}
                <Footer/>
            </section>
        );
    }
}
