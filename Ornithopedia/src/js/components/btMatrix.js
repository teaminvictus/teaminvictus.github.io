/**
 * Created by pratikgarala on 18/4/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

import endangered from '../../images/Birds/endangered.png';
import unSelect from '../../images/Birds/unselect.png';
import select from '../../images/Birds/select1.png';
import btSelect from '../../images/Birds/select.png';



const IMAGES_PER_PAGE = 4;
var btSelectedBirds = [];
var btSelectedTrees = [];
var btTrees = [];
var btFilteredTrees = [];
var foodSource = {
    "fruit" : 0,
    "insect" : 0,
    "seed" : 0,
    "nectar" : 0
};

var pdfText = "";
export default class BTMatrix extends React.Component {


    constructor() {
        super();
    }

    componentWillMount(){

        console.log("inside will");
    }

    componentDidMount() {
        $("#instructions")[0].classList.add("hideElement");
        $("#pickLocation")[0].classList.add("hideElement");
        $("#selectBirds")[0].classList.add("hideElement");
        $("#selectTrees")[0].classList.add("hideElement");
        $("#createMatrix")[0].classList.add("hideElement");
        if(this.props.matrix.stepNo == null) {
            this.props.onSetStep(0);
            $("#instructions")[0].classList.remove("hideElement");
        }else{
            var progressBar = document.querySelectorAll(".progress-indicator li");
            switch (this.props.matrix.stepNo){
                case 0:
                    progressBar[0].className = "active";
                    progressBar[1].className = "";
                    progressBar[2].className = "";
                    progressBar[3].className = "";
                    progressBar[4].className = "";
                    $("#instructions")[0].classList.remove("hideElement");
                    break;
                case 1:
                    progressBar[0].className = "completed";
                    progressBar[1].className = "active";
                    progressBar[2].className = "";
                    progressBar[3].className = "";
                    progressBar[4].className = "";
                    $("#pickLocation")[0].classList.remove("hideElement");
                    break;
                case 2:
                    progressBar[0].className = "completed";
                    progressBar[1].className = "completed";
                    progressBar[2].className = "active";
                    progressBar[3].className = "";
                    progressBar[4].className = "";
                    $("#selectBirds")[0].classList.remove("hideElement");
                    break;
                case 3:
                    progressBar[0].className = "completed";
                    progressBar[1].className = "completed";
                    progressBar[2].className = "completed";
                    progressBar[3].className = "active";
                    progressBar[4].className = "";
                    $("#selectTrees")[0].classList.remove("hideElement");
                    break;
                case 4:
                    progressBar[0].className = "completed";
                    progressBar[1].className = "completed";
                    progressBar[2].className = "completed";
                    progressBar[3].className = "completed";
                    progressBar[4].className = "active";
                    $("#createMatrix")[0].classList.remove("hideElement");
                    break;
                default:
                    break;
            }
        }
        if(this.props.postcodes.postcodes == null){
            this.props.onGetPostcodes();

            // this.props.onGetAuStates();
        }

        if(this.props.postcodes.selectedPostcode != null){
            $("#postcodeInput").val(this.props.postcodes.selectedPostcode.suburb + ", " + this.props.postcodes.selectedPostcode.state + ", " + this.props.postcodes.selectedPostcode.postcode)
        }

        if(this.props.birds.birds == null){
            this.props.onGetBirds();
        }

        if(this.props.trees.trees == null){
            this.props.onGetTrees();
        }
    }

    onSelectPostcode(postcode) {
        this.props.onSelectPostcode(postcode);
        $("#btnNext")[0].classList.add("btn");
        $("#btnNext")[0].classList.remove("btn1");
    }

    nextClicked(){

        var progressBar = document.querySelectorAll(".progress-indicator li");
        var index = 0;
        for(var i = 0; i < progressBar.length ; i++){
            if( i + 1 != progressBar.length){
                const li = progressBar[i];
                if (li.className.localeCompare("active") == 0){
                    // li.className = "completed";
                    // progressBar[i+1].className = "active";
                    index = i + 1;
                    break;
                }
            }else{
                // this.htmltoPdf();
            }
        }
        this.props.onSetStep(index);
        switch (index){
            case 0:
                break;
            case 1:
                progressBar[index - 1].className = "completed";
                progressBar[index].className = "active";
                $("#instructions")[0].classList.add("hideElement");
                $("#pickLocation")[0].classList.remove("hideElement");
                $("#btnBack")[0].classList.add("btn");
                $("#btnBack")[0].classList.remove("btn1");
                $("#btnNext")[0].classList.add("btn1");
                $("#btnNext")[0].classList.remove("btn");
                break;
            case 2:
                if (this.props.postcodes.selectedPostcode != null) {
                    progressBar[index - 1].className = "completed";
                    progressBar[index].className = "active";
                    $("#pickLocation")[0].classList.add("hideElement");
                    $("#selectBirds")[0].classList.remove("hideElement");
                    $("#btnBack")[0].classList.add("btn");
                    $("#btnBack")[0].classList.remove("btn1");
                    $("#btnNext")[0].classList.add("btn1");
                    $("#btnNext")[0].classList.remove("btn");
                }
                break;
            case 3:
                if (btSelectedBirds.length != 0) {
                    progressBar[index - 1].className = "completed";
                    progressBar[index].className = "active";
                    btSelectedBirds.map(bird => {
                        if(bird.fruit == 1)
                            foodSource.fruit = 1;
                        if(bird.insect == 1)
                            foodSource.insect = 1;
                        if(bird.seed == 1)
                            foodSource.seed = 1;
                        if(bird.nectar == 1)
                            foodSource.nectar = 1;
                    });
                    btFilteredTrees = btTrees.filter(tree => (foodSource.fruit == 1 && tree.fruit == 1) ||
                        (foodSource.insect == 1 && tree.insect == 1) ||
                        (foodSource.seed == 1 && tree.seed == 1) ||
                        (foodSource.nectar == 1 && tree.nectar == 1));
                    if (btFilteredTrees.length == 0 )
                        btFilteredTrees = btTrees;
                    $("#selectBirds")[0].classList.add("hideElement");
                    $("#selectTrees")[0].classList.remove("hideElement");
                    $("#btnNext")[0].classList.add("btn1");
                    $("#btnNext")[0].classList.remove("btn");
                }
                break;
            case 4:
                if (btSelectedTrees.length != 0) {
                    progressBar[index - 1].className = "completed";
                    progressBar[index].className = "active";
                    $("#selectTrees")[0].classList.add("hideElement");
                    $("#createMatrix")[0].classList.remove("hideElement");
                    $("#btnNext")[0].classList.add("btn1");
                    $("#btnNext")[0].classList.remove("btn");
                }
                break;
            case 5:
            //     progressBar[index - 1].className = "completed";
            //     progressBar[index].className = "active";
            //     $("#createMatrix")[0].classList.add("hideElement");
            //     $("#saveMatrix")[0].classList.remove("hideElement");
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

                    index = i - 1;
                    break;
                }

            }
        }
        this.props.onSetStep(index);
        switch (index){
            case 0:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                $("#instructions")[0].classList.remove("hideElement");
                $("#pickLocation")[0].classList.add("hideElement");
                $("#btnBack")[0].classList.add("btn1");
                $("#btnBack")[0].classList.remove("btn");
                $("#btnNext")[0].classList.add("btn");
                $("#btnNext")[0].classList.remove("btn1");
                break;
            case 1:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                $("#pickLocation")[0].classList.remove("hideElement");
                $("#selectBirds")[0].classList.add("hideElement");
                $("#btnNext")[0].classList.add("btn");
                $("#btnNext")[0].classList.remove("btn1");
                break;
            case 2:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                foodSource.fruit = 0;
                foodSource.insect = 0;
                foodSource.nectar = 0;
                foodSource.seed = 0;
                $("#selectBirds")[0].classList.remove("hideElement");
                $("#selectTrees")[0].classList.add("hideElement");
                $("#btnNext")[0].classList.add("btn");
                $("#btnNext")[0].classList.remove("btn1");
                break;
            case 3:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                $("#selectTrees")[0].classList.remove("hideElement");
                $("#createMatrix")[0].classList.add("hideElement");
                $("#btnNext")[0].classList.add("btn");
                $("#btnNext")[0].classList.remove("btn1");
                break;
            // case 3:
                // progressBar[index + 1].className = "";
                // progressBar[index].className = "active";
                // $("#createMatrix")[0].classList.remove("hideElement");
                // $("#saveMatrix")[0].classList.add("hideElement");
                // break;
            default:
                break;
        }
    }

    // onSelectPostcode(postcode){
    //     this.props.onSelectPostcode(postcode);
    //     this.props.onGetTreesInLocation(postcode);
    // }

    onSelectUnselect(bird){
        const birdId = bird.birdId;
        if($("#bt" + birdId)[0].className.localeCompare("unSelect") == 0) {
            $("#bt" + birdId)[0].classList.remove("unSelect");
            $("#bt" + birdId)[0].classList.add("select");
            $("#bt" + birdId)[0].children[0].src = select;
            bird.isSelected = 1;
            btSelectedBirds.push(bird);
            $("#btnNext")[0].classList.add("btn");
            $("#btnNext")[0].classList.remove("btn1");
        }else {
            $("#bt" + birdId)[0].classList.add("unSelect");
            $("#bt" + birdId)[0].classList.remove("select");
            $("#bt" + birdId)[0].children[0].src = unSelect;

            const index = btSelectedBirds.findIndex(selectedbird => selectedbird.birdId === birdId);
            bird.isSelected = 0;
            btSelectedBirds.splice(index, 1);
            if(btSelectedBirds.length == 0){
                $("#btnNext")[0].classList.add("btn1");
                $("#btnNext")[0].classList.remove("btn");
            }
        }
        console.log(btSelectedBirds);
    }

    onSelectUnselectTree(tree){
        const treeId = tree.treeId;
        if($("#bt" + treeId)[0].className.localeCompare("unSelect") == 0) {
            $("#bt" + treeId)[0].classList.remove("unSelect");
            $("#bt" + treeId)[0].classList.add("select");
            $("#bt" + treeId)[0].children[0].src = select;
            tree.isSelected = 1;
            btSelectedTrees.push(tree);
            $("#btnNext")[0].classList.add("btn");
            $("#btnNext")[0].classList.remove("btn1");
        }else {
            $("#bt" + treeId)[0].classList.add("unSelect");
            $("#bt" + treeId)[0].classList.remove("select");
            $("#bt" + treeId)[0].children[0].src = unSelect;
            tree.isSelected = 0;
            const index = btSelectedTrees.findIndex(selectedTree => selectedTree.treeId === treeId);
            btSelectedTrees.splice(index, 1);
            if(btSelectedTrees.length == 0){
                $("#btnNext")[0].classList.add("btn1");
                $("#btnNext")[0].classList.remove("btn");
            }
        }
        console.log(btSelectedTrees);
    }

    renderSelectSymbol(tree, bird){
        if((bird.fruit == 1 && tree.fruit == 1) ||
            (bird.insect == 1 && tree.insect == 1) ||
            (bird.seed == 1 && tree.seed == 1) ||
            (bird.nectar == 1 && tree.nectar == 1)){
            {pdfText = pdfText +  "\tX"}
            return(
                <img src={btSelect} width="30" height="30" />
            );
        }else {
            {pdfText = pdfText +  "\t"}
        }
    }

    renderSelectUnselectForBirds(bird){

        var className;
        var imgSrc;
        if(bird.isSelected == 0) {
            className = "unSelect";
            imgSrc = unSelect;
        } else if(bird.isSelected == 1) {
            className = "select";
            imgSrc = select;
        }
        return(
            <div className="col-sm-1">
                <div id={"bt" + bird.birdId} className={className} onClick={()=> this.onSelectUnselect(bird)}>
                    <img src={imgSrc} width="30" height="30"/>
                </div>
            </div>
        );
    }

    renderSelectUnselectForTrees(tree){

        var className;
        var imgSrc;
        if(tree.isSelected == 0) {
            className = "unSelect";
            imgSrc = unSelect;
        } else if(tree.isSelected == 1) {
            className = "select";
            imgSrc = select;
        }
        return(
            <div className="col-sm-1">
                <div id={"bt" + tree.treeId} className={className} onClick={()=> this.onSelectUnselectTree(tree)}>
                    <img src={imgSrc} width="30" height="30"/>
                </div>
            </div>
        );
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

    renderBirdThumbnail(bird){
        var birdUrl;
        if(bird.isImageAvailable == 1){
             birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
        }else{
             birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
        }
        return(
            <img src={birdUrl} width="30" height="30" />
        );
    }

    renderTreeThumbnail(tree){
        var treeUrl;
        if(tree.isImageAvailable == 1){
            treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
        }else{
            treeUrl = require("../../images/Trees/treePlaceholder.jpg");
        }
        return(
            <img src={treeUrl} width="30" height="30" />
        );
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
            foodSource = foodSource + "Seed,";
        if(bird.smallFish == 1)
            foodSource = foodSource + "small fishes,";

        if(foodSource.length == 0)
            foodSource = "Data Not Available";

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

    htmltoPdf(){
        var doc = new jsPDF();

        var specialElementHandlers = {
            '#editor': function(element, renderer){
                return true;
            }
        };

        console.log(specialElementHandlers, $("#matrixTable").get(0));

        const margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };

        doc.text(20,20, pdfText);
        doc.save("Test.pdf");

        // all coords and widths are in jsPDF instance's declared units
        // 'inches' in this case
        // doc.fromHTML(
        //     $("#matrixTable").get(0), // HTML string or DOM elem ref.
        //     margins.left, // x coord
        //     margins.top, {// y coord
        //         'width': margins.width, // max width of content on PDF
        //         'elementHandlers': specialElementHandlers
        //     },
        //     function(dispose) {
        //         // dispose: object with X, Y of the last line add to the PDF
        //         //          this allow the insertion of new lines after html
        //         doc.save('Test.pdf');
        //     }
        //     , margins);

    }

        render() {
            var stepNo = this.props.matrix.stepNo;
            var className;
            const postcodes = this.props.postcodes.matchPostcodes;
            var btBirds =[];
            if (this.props.birdsForIdentifier.filteredBirdsForIdentifier != null)
                btBirds = this.props.birdsForIdentifier.filteredBirdsForIdentifier.filter(bird => (bird.fruit.localeCompare("1")==0 || bird.seed.localeCompare("1")==0 ||
                                                                                                                bird.insect.localeCompare("1")==0 || bird.nectar.localeCompare("1")==0 ));

            if(this.props.postcodes.selectedPostcode!= null && this.props.trees.trees != null) {
                switch (this.props.postcodes.selectedPostcode.state){
                    case "VIC":
                        btTrees = this.props.trees.trees.filter(tree => (tree.vic == 1));
                        break;
                    case "NSW":
                        btTrees = this.props.trees.trees.filter(tree => (tree.nsw == 1));
                        break;
                    case "TAS":
                        btTrees = this.props.trees.trees.filter(tree => (tree.tas == 1));
                        break;
                    case "QLD":
                        btTrees = this.props.trees.trees.filter(tree => (tree.qld == 1));
                        break;
                    case "SA":
                        btTrees = this.props.trees.trees.filter(tree => (tree.sa == 1));
                        break;
                    case "WA":
                        btTrees = this.props.trees.trees.filter(tree => (tree.wa == 1));
                        break;
                    case "ACT":
                        btTrees = this.props.trees.trees.filter(tree => (tree.act == 1));
                        break;
                    case "NT":
                        btTrees = this.props.trees.trees.filter(tree => (tree.nt == 1));
                        break;
                }

            }
            return (
                <section id="btMatrix">
                    <div className="progressBar">
                        <ul className="progress-indicator">
                            <li className="active">
                                <span className="bubble"/>
                                Instructions
                            </li>
                            <li>
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
                                BT Matrix
                            </li>
                            {/*<li>*/}
                                {/*<span className="bubble"/>*/}
                                {/*Save*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="btSteps">
                        <div id= "instructions">
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Instructions</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-lg-12">
                                    <p>
                                        To get a bird Tree Matrix, you have to go through four different stages.
                                        This will allow us to provide you more specific information about birds and trees.
                                        <ol>
                                            <li>Pick Your Location: <span>Enter the location of your backyard.</span></li>
                                            <li>Select Birds: <span>Select the birds which you want to see at your backyard.</span></li>
                                            <li>Select Trees: <span>Select the trees which are already in your backyard or you want to plant.</span></li>
                                            <li>Bird Tree Matrix: <span>It will show you the relation between the selected birds and selected trees.</span></li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                        <input id="postcodeInput" type="text"  placeholder="Enter Suburb Name or Postcode..." onChange={() => {this.props.onDisplayMatches()}} autoComplete="off"/>
                                        {postcodes && postcodes.length > 0 ? (
                                            <ul className="suggestions">
                                                {postcodes.map((postcode, index) => {
                                                    return (
                                                        <li key={postcode.id} onClick={() => this.onSelectPostcode(postcode)}>
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
                        <div id= "selectBirds">
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
                                    {btBirds && btBirds.length > 0 ? (
                                        <div>
                                            {btBirds.map((bird, index) => {
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
                                                                    <div className="col-sm-9">
                                                                        <span>{bird.commonName}</span>
                                                                        {/*<hr className="star-primary" />*/}
                                                                        {/*Status: {this.renderBirdStatus(bird)}*/}
                                                                        {/*<br />*/}
                                                                        {/*Food Source : {this.renderFoodSource(bird)}*/}
                                                                        {/*<br/>*/}
                                                                        {/*{this.renderBirdSound(bird)}*/}
                                                                    </div>
                                                                    {this.renderSelectUnselectForBirds(bird)}
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
                        <div id= "selectTrees" >
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Select Trees</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                                <div id="birdImages">
                                    <center>
                                        {btFilteredTrees && btFilteredTrees.length > 0 ? (
                                            <div>
                                                {btFilteredTrees.map((tree, index) => {
                                                    if(tree.isImageAvailable == 1){
                                                        var treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
                                                    }else{
                                                        var treeUrl = require("../../images/Trees/treePlaceholder.jpg");
                                                    }
                                                    return (
                                                        <div key={tree.treeId} className="card image-item">
                                                            {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                                            {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                                                            <div className="image-link">

                                                                <Link to={"/treeFinder" + tree.treeId} onClick={() => {this.props.onSelectTree(tree)}}>
                                                                    <div className="caption">
                                                                        <div className="caption-content">
                                                                            <i className="fa fa-search-plus fa-3x"/>
                                                                        </div>
                                                                    </div>

                                                                    <img src={treeUrl} height="200" width="300"/>
                                                                </Link>
                                                                <div className="title">
                                                                    <div className="col-sm-9">
                                                                        <span>{tree.commonName}</span>
                                                                    </div>
                                                                    {this.renderSelectUnselectForTrees(tree)}
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
                            <div className="container">
                                <div className="col-lg-12">

                                </div>
                            </div>
                        </div>
                        <div id= "createMatrix">
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Bird-Tree Matrix</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-lg-12">
                                    <table id="matrixTable">
                                        <thead>
                                        <tr>
                                            <th colSpan="2" rowSpan="2">
                                            </th>
                                            <th colSpan={btSelectedTrees.length }>
                                                TREES
                                                <span className="hideElement">
                                                    {pdfText = "\t\t\tTREES\n\t\t"}
                                                </span>
                                            </th>
                                        </tr>

                                        <tr>
                                            {/*<th colSpan="2">*/}
                                            {/*</th>*/}
                                            {btSelectedTrees.map((tree, index) => {
                                                return (
                                                <th key={tree.treeId}>
                                                    <table className="noBorder">
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                                {this.renderTreeThumbnail(tree)}
                                                            </th>
                                                            <th>
                                                                {tree.commonName}
                                                                <span className="hideElement">
                                                                {pdfText = pdfText + tree.commonName + "\t"}
                                                                </span>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                    </table>
                                                </th>
                                                )}
                                            )}
                                            <span className="hideElement">
                                            {pdfText = pdfText +  "\n"}
                                            </span>
                                        </tr>
                                        </thead>
                                        {btSelectedBirds.map((bird, index) => {
                                            return(
                                                <tr>
                                                    {index == 0 ? <th rowSpan={btSelectedBirds.length + 1}>
                                                        BIRDS
                                                        <span className="hideElement">
                                                        {pdfText = pdfText +  "BIRDS\t"}
                                                        </span>
                                                    </th> : null}
                                                    <th key={bird.birdId}>
                                                        <table className="noBorder">
                                                            <thead>
                                                            <tr>
                                                                <th>
                                                                    {this.renderBirdThumbnail(bird)}
                                                                </th>
                                                                <th>
                                                                    {bird.commonName}
                                                                    <span className="hideElement">
                                                                    {pdfText = pdfText +  "\t" + bird.commonName}
                                                                    </span>
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                        </table>
                                                        {/*<div className="col-xs-1 text-center">*/}
                                                            {/*{this.renderBirdThumbnail(bird)}*/}
                                                        {/*</div>*/}
                                                        {/*<div className="col-xs-11">*/}
                                                            {/*{bird.commonName}*/}
                                                        {/*</div>*/}
                                                    </th>
                                                    {btSelectedTrees.map((tree, index) => {
                                                        return (
                                                            <td key={tree.treeId}>
                                                                {this.renderSelectSymbol(tree, bird)}
                                                            </td>
                                                        )}
                                                    )}
                                                    <span className="hideElement">
                                                    {pdfText = pdfText +  "\n\t"}
                                                    </span>
                                                </tr>
                                            )}
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btBottom">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-3">
                            <a href="#" id="btnBack" className="btn1 btn-default" onClick={() => this.backClicked()}>Back</a>
                        </div>
                        <div className="col-lg-3">
                            <a href="#" id="btnNext" className="btn btn-default" onClick={() => this.nextClicked()}>Next</a>
                        </div>
                        <div className="col-lg-3">
                        </div>
                    </div>
                    <Footer/>
                </section>
            );
        }
}