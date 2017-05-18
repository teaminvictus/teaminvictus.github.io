/**
 * Created by pratikgarala on 13/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import endangered from '../../images/Birds/endangered.png';
import Preloader from './preloader';

var birdUrl = null;
var bird = [];


const renderImgUrl = (bird) => {
    if(bird.isImageAvailable == 1){
        birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
    }else{
        birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
    }
};

class BirdDetail extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.onSelectedBird(this.props.match.params.bird_Id);
        this.props.onGetBirdCount(this.props.match.params.bird_Id);
    }

    componentWillUnmount(){
        this.props.onUnSelectedBird();
    }

    componentDidUpdate(){

        if(this.props.birds.selectedBirdCount != null) {
            var selectedBirdCount = this.props.birds.selectedBirdCount;
            var trendData1 = [];
            var trendData = [];
            var year = new Date().getFullYear();
            if (selectedBirdCount != null) {
                for (var i = 1; i <= selectedBirdCount.length; i++) {
                    if (i > 10) {
                        break;
                    }
                    const date = new Date(year, 1, 1);
                    trendData1.push({
                        "year": date,
                        "count": parseInt(selectedBirdCount[selectedBirdCount.length - i].birdCount)
                    });

                    year--;

                }
                while (trendData1.length != 0){
                    trendData.push(trendData1.pop());
                }
            }

            $("#birdTrend").empty();
            var d3 = require('d3');
            var svg = d3.select("#birdTrend").append("svg").attr("width", "600").attr("height", "300"),
                margin = {top: 20, right: 20, bottom: 30, left: 50},
                width = +svg.attr("width") - margin.left - margin.right,
                height = +svg.attr("height") - margin.top - margin.bottom,
                g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            $("#birdTrend")
                .append(
                    $("<div>")
                        .text("Bird Count trend of " + this.props.birds.selectedBird.commonName + " (Last "+ trendData.length +" years)")
                );

            var parseTime = d3.timeParse("%d-%b-%y");

            var x = d3.scaleTime()
                .rangeRound([0, width]);

            var y = d3.scaleLinear()
                .rangeRound([height, 0]);

            var line = d3.line()
                .x(function (d) {
                    return x(d.year);
                })
                .y(function (d) {
                    return y(+d.count);
                });

            x.domain(d3.extent(trendData, function (d) {
                return d.year;
            }));

            y.domain(d3.extent(trendData, function (d) {
                return +d.count;
            }));


            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .select(".domain")
                .remove();

            g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
              .attr("fill", "#d35400")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", "0.71em")
              .attr("text-anchor", "end")
              .text("Bird Count");

            var path = g.append("path")
                .datum(trendData)
                .attr("fill", "none")
                .attr("stroke", "#d35400")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 6)
                .attr("d", line);

            var totalLength = path.node().getTotalLength();

            path
                .attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
                .transition()
                .duration(3000)
                // .ease("linear")
                .attr("stroke-dashoffset", 0);

            var dot = g.selectAll("dot")
                .data(trendData)
                .enter().append("circle")
                .transition()
                .duration(4000)
                .attr("r", 6)
                .attr("fill", "#d35400")
                .attr("cx", function(d) { return x(d.year); })
                .attr("cy", function(d) { return y(d.count); });
        }
    }

    renderMapImage(){
        const selectedBird = this.props.birds.selectedBird;
        var mapName = "";
        if(selectedBird.nsw == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.nsw == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.nsw == "Endangered"){
            mapName = mapName + "2";
        }

        if(selectedBird.vic == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.vic == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.vic == "Endangered"){
            mapName = mapName + "2";
        }

        if(selectedBird.sa == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.sa == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.sa == "Endangered"){
            mapName = mapName + "2";
        }

        if(selectedBird.wa == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.wa == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.wa == "Endangered"){
            mapName = mapName + "2";
        }

        if(selectedBird.qld == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.qld == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.qld == "Endangered"){
            mapName = mapName + "2";
        }

        if(selectedBird.nt == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.nt == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.nt == "Endangered"){
            mapName = mapName + "2";
        }

        if(selectedBird.tas == "No"){
            mapName = mapName + "0";
        }else if(selectedBird.tas == "Yes"){
            mapName = mapName + "1";
        }else if(selectedBird.tas == "Endangered"){
            mapName = mapName + "2";
        }

        mapName = mapName + ".png";
        var mapUrl;
        try {
             mapUrl = require("../../images/mapbird/" + mapName);
        }catch (e){
             mpaUrl = require("../../images/mapbird/0000000.png");
        }

        return(
            <img src={"/" + mapUrl} />
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

    renderProvides(tree){
        var provides = "";
        if(tree.fruit == 1)
            provides = provides + "Fruits, ";
        if(tree.insect == 1)
            provides = provides + "Insects, ";
        if(tree.nectar == 1)
            provides = provides + "Nectar, ";
        if(tree.seed == 1)
            provides = provides + "Seed, ";

        if(provides.length == 0)
            provides = "Data Not Available";
        else
            provides = provides.substr(0,provides.length - 2);

        return(
            provides
        )
    }

    renderFoundAt(tree){
        var foundAt = "";
        if(tree.vic == 1)
            foundAt = foundAt + "VIC, ";
        if(tree.nsw == 1)
            foundAt = foundAt + "NSW, ";
        if(tree.qld == 1)
            foundAt = foundAt + "QLD, ";
        if(tree.sa == 1)
            foundAt = foundAt + "SA, ";
        if(tree.wa == 1)
            foundAt = foundAt + "WA, ";
        if(tree.tas == 1)
            foundAt = foundAt + "TAS, ";
        if(tree.act == 1)
            foundAt = foundAt + "ACT, ";
        if(tree.nt == 1)
            foundAt = foundAt + "NT, ";

        if(foundAt.length == 0)
            foundAt = "Data Not Available";
        else
            foundAt = foundAt.substr(0,foundAt.length - 2);

        return(
            foundAt
        )
    }

    render() {
        const selectedBird = this.props.birds.selectedBird;
        const selectedBirdCount = this.props.birds.selectedBirdCount;
        const likelyTrees = this.props.birds.likelyTrees;
        return (
            <div className="birdDetail">

                {selectedBird != null && selectedBirdCount != null ? (
                <div id={selectedBird.birdId}>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="modal-body birdTitle">
                                    <h2>{selectedBird.commonName}</h2>
                                    <div className="hr"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 text-center">
                                    <div className="card image-item">
                                        {renderImgUrl(selectedBird)}
                                        {this.renderEndangeredStatus(selectedBird)}
                                        <img src={"/" + birdUrl} height="200" width="300"/>
                                        <div className="title">
                                            <span>{selectedBird.commonName}</span>
                                            <div className="hr"></div>
                                            {/*<hr className="star-primary" />*/}
                                            Status: {this.renderBirdStatus(selectedBird)}
                                            <br />
                                            Food Source : {this.renderFoodSource(selectedBird)}
                                            <br/>
                                            {this.renderBirdSound(selectedBird)}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 text-center">
                                    <div id="birdTrend">
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className="row ">
                                <div className="col-lg-12 birdDescription">
                                    <p>
                                        {selectedBird.description}
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    {this.renderMapImage()}
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h5>Trees that can attract {selectedBird.commonName}</h5>
                                </div>
                                <div id="treeImages">
                                    <center>
                                        {likelyTrees && likelyTrees.length > 0 ? (
                                            <div>
                                                {likelyTrees.map((tree, index) => {

                                                    if(tree.isImageAvailable == 1){
                                                        var treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
                                                    }else{
                                                        var treeUrl = require("../../images/Trees/treePlaceholder.jpg");
                                                    }
                                                    return (
                                                        <div key={tree.treeId} className="card image-item">
                                                            <div className="image-link">
                                                                <Link to={"/treeFinder" + tree.treeId} onClick={() => {this.props.onSelectTree(tree)}}>
                                                                    <div className="caption">
                                                                        <div className="caption-content">
                                                                            <i className="fa fa-search-plus fa-3x"/>
                                                                        </div>
                                                                    </div>
                                                                    <img src={"/" + treeUrl} height="200" width="300"/>
                                                                </Link>
                                                                <div className="title">
                                                                    <span>{tree.commonName}</span>
                                                                    <div className="hr"></div>
                                                                    {/*<hr className="star-primary" />*/}
                                                                    Provides: {this.renderProvides(tree)}
                                                                    <br />
                                                                    Mostly found at: {this.renderFoundAt(tree)}
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ) : null}
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*</div>*/}
                </div> ) : <Preloader/> }
                <Footer/>
            </div>
        );
    }
}




export default BirdDetail;