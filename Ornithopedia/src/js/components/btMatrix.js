/**
 * Created by pratikgarala on 18/4/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import store from '../store/store';
import Pagination from 'react-js-pagination';

import unSelect from '../../images/Birds/unselect.png';
import select from '../../images/Birds/select1.png';
import bird1 from '../../images/Birds/9.jpg';
import bird2 from '../../images/Birds/10.jpg';
import bird3 from '../../images/Birds/11.jpg';
import bird4 from '../../images/Birds/12.jpg';
import bird5 from '../../images/Birds/13.jpg';
import bird6 from '../../images/Birds/6.jpg';
import bird7 from '../../images/Birds/7.jpg';

require("../js/btMatrixOperations");

const IMAGES_PER_PAGE = 4;
var btSelectedBirds = [];
export default class BTMatrix extends React.Component {


    constructor() {
        super();
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

    nextClicked(){

        var progressBar = document.querySelectorAll(".progress-indicator li");
        var index = 0;
        for(var i = 0; i < progressBar.length ; i++){
            if( i + 1 != progressBar.length && this.props.postcodes.selectedPostcode != null){
                const li = progressBar[i];
                if (li.className.localeCompare("active") == 0){
                    li.className = "completed";
                    progressBar[i+1].className = "active";
                    index = i + 1;
                    break;
                }

            }
        }
        switch (index){
            case 0:
                console.log($("#pickLocation")[0]);
                break;
            case 1:
                $("#pickLocation")[0].classList.add("hideElement");
                $("#selectBirds")[0].classList.remove("hideElement");
                break;
            case 2:
                $("#selectBirds")[0].classList.add("hideElement");
                $("#selectTrees")[0].classList.remove("hideElement");
                break;
            case 3:
                $("#selectTrees")[0].classList.add("hideElement");
                $("#createMatrix")[0].classList.remove("hideElement");
                break;
            case 4:
                $("#createMatrix")[0].classList.add("hideElement");
                $("#saveMatrix")[0].classList.remove("hideElement");
            default:
                break;
        }

    }

    backClicked(){

        var progressBar = document.querySelectorAll(".progress-indicator li");
        var index = progressBar.length;
        for(var i = 0; i < progressBar.length ; i++){
            if( i != 0){
                const li = progressBar[i];
                if (li.className.localeCompare("active") == 0){
                    li.className = "";
                    progressBar[i-1].className = "active";
                    index = i - 1;
                    break;
                }

            }
        }

        switch (index){
            case 0:
                $("#pickLocation")[0].classList.remove("hideElement");
                $("#selectBirds")[0].classList.add("hideElement");
                break;
            case 1:
                $("#selectBirds")[0].classList.remove("hideElement");
                $("#selectTrees")[0].classList.add("hideElement");
                break;
            case 2:
                $("#selectTrees")[0].classList.remove("hideElement");
                $("#createMatrix")[0].classList.add("hideElement");
                break;
            case 3:
                $("#createMatrix")[0].classList.remove("hideElement");
                $("#saveMatrix")[0].classList.add("hideElement");
                break;
            default:
                break;
        }
    }

    onSelectUnselect(bird){
        const birdId = bird.birdId;
        if($("#bt" + birdId)[0].className.localeCompare("unSelect") == 0) {
            $("#bt" + birdId)[0].classList.remove("unSelect");
            $("#bt" + birdId)[0].classList.add("select");
            $("#bt" + birdId)[0].children[0].src = select;

            btSelectedBirds.push(bird);
        }else {
            $("#bt" + birdId)[0].classList.add("unSelect");
            $("#bt" + birdId)[0].classList.remove("select");
            $("#bt" + birdId)[0].children[0].src = unSelect;

            const index = btSelectedBirds.findIndex(selectedbird => selectedbird.birdId === birdId);
            btSelectedBirds.splice(index, 1);
        }
        console.log(btSelectedBirds);
    }

    render() {
        const postcodes = this.props.postcodes.matchPostcodes;
        var birdsForIdentifier =[];
        if (this.props.birdsForIdentifier.filteredBirdsForIdentifier != null)
        birdsForIdentifier = this.props.birdsForIdentifier.filteredBirdsForIdentifier.filter(bird => (bird.fruit.localeCompare("1")==0 || bird.seed.localeCompare("1")==0 ||
                                                                                                            bird.insect.localeCompare("1")==0 || bird.nectar.localeCompare("1")==0 ));
        return (
            <section id="btMatrix">
                <div className="progressBar">
                    <ul className="progress-indicator">
                        <li className="active">
                            <span className="bubble"/>
                            Pick Your Location
                        </li>
                        <li>
                            <span className="bubble"/>
                            Select Birds
                        </li>
                        <li>
                            <span className="bubble"/>
                            Select Trees
                        </li>
                        <li>
                            <span className="bubble"/>
                            Create Your BT Matrix
                        </li>
                        <li>
                            <span className="bubble"/>
                            Save
                        </li>
                    </ul>
                </div>
                <div className="btSteps">
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
                    <div id= "selectBirds" className="hideElement">
                        <div className="btStepsTitle">
                            <div className="col-lg-8 col-lg-offset-2">
                                {/*<!-- Section Heading -->*/}
                                <div className="section-heading">
                                    <h2>Select Birds</h2>
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                        <div id="birdImages">
                            <center>
                                {birdsForIdentifier && birdsForIdentifier.length > 0 ? (
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

                                                            <Link to={"/birdFinder/" + bird.birdId}>
                                                                <div className="caption">
                                                                    <div className="caption-content">
                                                                        <i className="fa fa-search-plus fa-3x"/>
                                                                    </div>
                                                                </div>

                                                                <img src={birdUrl} height="200" width="300"/>
                                                            </Link>
                                                            <div className="title">
                                                                <div className="col-sm-9">
                                                                    <span>{bird.commonName}</span>
                                                                </div>
                                                                <div className="col-sm-1">
                                                                    <div id={"bt" + bird.birdId} className="unSelect" onClick={()=> this.onSelectUnselect(bird)}>
                                                                        <img src={unSelect} width="30" height="30"/>
                                                                    </div>
                                                                </div>
                                                                {/*<div className="col-sm-9">*/}
                                                                    {/*<audio controls>*/}
                                                                        {/*<source src="http://www.xeno-canto.org/sounds/uploaded/MXMFTGKZDR/XC355017-GMCLAC_1932-Spiny-cheekedHoneyeater.mp3" type="audio/mpeg" />*/}
                                                                        {/*Your browser does not support the audio element.*/}
                                                                    {/*</audio>*/}
                                                                {/*</div>*/}
                                                            </div>
                                                        </div>
                                                        {/*</a>*/}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : null}
                            </center>
                        </div>
                    </div>
                    <div id= "selectTrees" className="hideElement">
                        <div className="btStepsTitle">
                            <div className="col-lg-8 col-lg-offset-2">
                                {/*<!-- Section Heading -->*/}
                                <div className="section-heading">
                                    <h2>Select Trees</h2>
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-lg-12">

                            </div>
                        </div>
                    </div>
                    <div id= "createMatrix" className="hideElement">
                        <div className="btStepsTitle">
                            <div className="col-lg-8 col-lg-offset-2">
                                {/*<!-- Section Heading -->*/}
                                <div className="section-heading">
                                    <h2>Create Matrix</h2>
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-lg-12">

                            </div>
                        </div>
                    </div>
                    <div id= "saveMatrix" className="hideElement">
                        <div className="btStepsTitle">
                            <div className="col-lg-8 col-lg-offset-2">
                                {/*<!-- Section Heading -->*/}
                                <div className="section-heading">
                                    <h2>Save Matrix</h2>
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-lg-12">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="btBottom">
                    <div className="col-lg-6 text-right">
                        <a href="#" className="btn btn-default" onClick={() => this.backClicked()}>Back</a>
                    </div>
                    <div className="col-lg-6 text-left">
                        <a href="#" className="btn btn-default" onClick={() => this.nextClicked()}>Next</a>
                    </div>
                    {/*<div className="col-lg-offset-1"></div>*/}
                </div>
            </section>
        );
    }
}




