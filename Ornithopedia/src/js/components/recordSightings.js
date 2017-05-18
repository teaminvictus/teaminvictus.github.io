/**
 * Created by pratikgarala on 7/5/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import store from '../store/store';
import Footer from './footer';
import database from '../actions/database';

var selectedBird = null;
var selectedPostcode = null;
var birds = [];
var postcodes = [];
var imageInBase64 = "";

export default class RecordSightings extends React.Component {


    constructor() {
        super();
        this.state = {
            activePage: 1
        };
    }


    componentWillMount() {
        if(store.getState().birds.birds == null){
            this.props.onGetBirds();
        }
        if(store.getState().postcodes.postcodes == null){
            this.props.onGetPostcodes();
            // this.props.onGetAuStates();
        }
    }

    componentDidMount(){
        if( store.getState().birds.selectedBirdForRecordSighting != null){
            const b = store.getState().birds.selectedBirdForRecordSighting;
            $("#birdName").val(b.commonName);
        }
        if( store.getState().postcodes.selectedPostcodeForRecordSighting != null){
            const p = store.getState().postcodes.selectedPostcodeForRecordSighting;
            $("#location").val(p.suburb + ", " + p.state + ", " + p.postcode);
        }


        var fileInput = document.getElementById("selectFile");
        fileInput.addEventListener('change', readFile);


        function readFile(){

            if (this.files && this.files[0]) {

                var FR= new FileReader();

                FR.addEventListener("load", function(e) {
                    imageInBase64 = e.target.result;
                });

                FR.readAsDataURL( this.files[0] );
            }

        }
        // require("../js/readFile");
    }




    onSubmitAction(){

        var flag = true;
        if(this.props.birds.matchBirdsForRecordSighting.length != 0 && this.props.birds.selectedBirdForRecordSighting == null){
            alert("Please click on any Bird Name..!!");
            flag = false;
        }
        console.log(new Date());
        console.log($("#observationDate").val());
        if($("#observationDate").val() > new Date()){
            alert("Please select valid date..!!");
            flag = false;
        }

        if(this.props.postcodes.matchPostcodesForRecordSighting != 0 && this.props.postcodes.selectedPostcodeForRecordSighting == null){
            alert("Please click on any location..!!");
            flag = false;
        }

        if(flag) {
            alert("Data has been saved..!!");
            database.ref('sightings/').push().set({
                name: $("#name").val(),
                birdCommonName : this.props.birds.selectedBirdForRecordSighting.commonName,
                birdScientificName : this.props.birds.selectedBirdForRecordSighting.scientificName,
                basisOfRecord : $("#basisOfRecord").val(),
                certainty : $("#certainty").val(),
                birdCount : $("#birdCount").val(),
                observationDate : $("#observationDate").val(),
                latitude : this.props.postcodes.selectedPostcodeForRecordSighting.latitude,
                longitude : this.props.postcodes.selectedPostcodeForRecordSighting.longitude,
                birdPicture : imageInBase64,
                comments : $("#comments").val()
            });

            $("#name").val("");
            $("#birdName").val("");
            $("#observationDate").val("");
            $("#location").val("");
            $("#comments").val("");

        }
        else
            alert("Data is not saved..!!");
    }

    // onSelectBird(bird){
    //     selectedBird = bird;
    //     birds = [];
    //     console.log(bird);
    //     $("#birdName").val(bird.commonName);
    //     $(".suggestions").empty();
    // }

    // onSelectPostcode(postcode){
    //     selectedPostcode = postcode;
    //     postcodes = [];
    //     console.log(postcode);
    //     $("#location").val(postcode.suburb + ", " + postcode.state + ", " + postcode.postcode);
    //     $(".suggestions").empty();
    // }

    onDisplayMatches(){
        this.props.onDisplayMatches();
        // if($("#birdName").val().localeCompare("") != 0){
        //     $(".suggestions").empty();
        // }

    }

    render() {
        // const birds = [];
        birds = this.props.birds.matchBirdsForRecordSighting;
        postcodes = this.props.postcodes.matchPostcodesForRecordSighting;
        // const postcodes = [];
        return (
            <section id="recordSightings">
                <div className="col-lg-8 col-lg-offset-2">
                    {/*<!-- Section Heading -->*/}
                    <div className="section-heading">
                        <h2>Record Your Sightings</h2>
                        <div className="hr"></div>
                    </div>
                </div>
                <div className="container">
                    <form>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Enter Your Name</p>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" id="name" placeholder="Enter Your Name..."  required/>
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Basis Of Record</p>
                            </div>
                            <div className="col-lg-9">
                                <select name="basisOfRecord" id="basisOfRecord">
                                    <option value="observation">Observation</option>
                                    <option value="specimen">Specimen</option>
                                    <option value="stillImage">Still Image</option>
                                    <option value="movingImage">Moving Image</option>
                                    <option value="sound">Sound</option>
                                </select>
                                {/*<input type="text"  placeholder="Select Basis Of Record..." onChange={() => {this.props.onDisplayMatches()}} />*/}
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Bird Name</p>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" id="birdName" placeholder="Enter Bird Name..." onChange={() => {this.onDisplayMatches()}} required autoComplete="off"/>
                                {(birds && birds.length > 0)? (
                                    <ul className="suggestions">
                                        {birds.map((bird, index) => {
                                            return (
                                                <li key={birds.birdId} onClick={() => this.props.onSelectBird(bird)}>
                                                            <span>
                                                                {bird.commonName}
                                                            </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">How Certain are you?</p>
                            </div>
                            <div className="col-lg-9">
                                <select name="certainty" id="certainty">
                                    <option value="certain">Certain</option>
                                    <option value="notCertain">Not Certain</option>
                                </select>
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Sighting Date</p>
                            </div>
                            <div className="col-lg-9">
                                <input type="date" id="observationDate" placeholder="Enter Sighting Date..." required/>
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Sighting Location</p>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" id="location" placeholder="Enter Sighting Location or Postcode..." onChange={() => {this.props.onDisplayPostcodeMatches()}} required autoComplete="off"/>
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
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Bird Count</p>
                            </div>
                            <div className="col-lg-9">
                                <input id="birdCount" type="number"  placeholder="Enter Bird Count..."  required/>
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Image</p>
                            </div>
                            <div className="col-lg-9">
                                <input type="file" id="selectFile" accept="image/*" placeholder="Select Image..." />
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-3 text-left">
                                <p className="recordLabel">Comments</p>
                            </div>
                            <div className="col-lg-9">
                                <textarea cols="90" id="comments" name="comments" placeholder="Enter Comments...">

                                </textarea>
                            </div>
                        </div>
                        <div className="row bottom_margin_20">
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-4">
                                <input type="button" value="Save" className="btn btn-default" onClick={()=>{this.onSubmitAction()}}/>
                            </div>
                            <div className="col-lg-4">
                            </div>
                        </div>
                    </form>
                </div>
                <Footer/>
            </section>
        );
    }
}