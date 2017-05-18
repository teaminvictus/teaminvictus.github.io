/**
 * Created by pratikgarala on 18/4/17.
 */
import React from 'react';
import store from '../store/store';
import Footer from './footer';
import {Link} from 'react-router-dom';
import endangered from '../../images/Birds/endangered.png';
import Preloader from './preloader';

var treeUrl = null;

const renderImgUrl = (tree) => {
    if(tree.isImageAvailable == 1){
        treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
    }else{
        treeUrl = require("../../images/Trees/treePlaceholder.jpg");
    }
};

class TreeDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.onSelectedTree(this.props.match.params.tree_Id);
    }

    componentDidMount() {
        // this.props.onGetLikelyBirds(store.getState().trees.selectedTree);
    }

    componentWillUnmount(){
        this.props.onUnSelectedTree();
    }

    renderMapImage(){
        const selectedTree = this.props.trees.selectedTree;
        var mapName = "";
        if(selectedTree.nsw == 0){
            mapName = mapName + "0";
        }else if(selectedTree.nsw == 1) {
            mapName = mapName + "1";
        }
        if(selectedTree.vic == 0){
            mapName = mapName + "0";
        }else if(selectedTree.vic == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.sa == 0){
            mapName = mapName + "0";
        }else if(selectedTree.sa == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.wa == 0){
            mapName = mapName + "0";
        }else if(selectedTree.wa == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.qld == 0){
            mapName = mapName + "0";
        }else if(selectedTree.qld == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.nt == 0){
            mapName = mapName + "0";
        }else if(selectedTree.nt == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.tas == 0){
            mapName = mapName + "0";
        }else if(selectedTree.tas == 1){
            mapName = mapName + "1";
        }

        mapName = mapName + ".png";
        var mapUrl;
        try {
            mapUrl = require("../../images/maptree/" + mapName);
        }catch (e){
            mpaUrl = require("../../images/maptree/0000000.png");
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
        const likelyBirds = this.props.trees.likelyBirds;
        console.log(this.props.trees.selectedTree);
        return(
            <div className="treeDetail">
                {/*{console.log(store.getState())}*/}
                {this.props.trees.selectedTree != null ? (
                <div id={this.props.trees.selectedTree.treeId}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="modal-body birdTitle">
                                    <h2>{this.props.trees.selectedTree.commonName}</h2>
                                    <div className="hr"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 text-center">
                                    <div className="card image-item">
                                        {renderImgUrl(this.props.trees.selectedTree)}
                                        <img src={"/" + treeUrl} height="200" width="300"/>
                                        <div className="title">
                                            <span>{this.props.trees.selectedTree.commonName}</span>
                                            <div className="hr"></div>
                                            {/*<hr className="star-primary" />*/}
                                            Provides: {this.renderProvides(this.props.trees.selectedTree)}
                                            <br />
                                            Mostly found at: {this.renderFoundAt(this.props.trees.selectedTree)}
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 birdDescription">
                                    <p>
                                        {this.props.trees.selectedTree.description}
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    {this.renderMapImage()}
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h5>Birds that can be attracted by {this.props.trees.selectedTree.commonName}</h5>
                                </div>
                                <div id="birdImages">
                                    <div className="text-center">
                                        {likelyBirds && likelyBirds.length > 0 ? (
                                            <div>
                                                {likelyBirds.map((bird, index) => {

                                                    if(bird.isImageAvailable == 1){
                                                        var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
                                                    }else{
                                                        var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
                                                    }
                                                    {/*console.log(birdUrl);*/}
                                                    return (
                                                        <div key={bird.birdId} className="card image-item">
                                                            {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                                                <div className="image-link">
                                                                    <Link to={"/birdFinder" + bird.birdId} >
                                                                        <div className="caption">
                                                                            <div className="caption-content">
                                                                                <i className="fa fa-search-plus fa-3x"/>
                                                                            </div>
                                                                        </div>
                                                                        {this.renderEndangeredStatus(bird)}
                                                                    </Link>
                                                                    <img src={"/" + birdUrl} height="200" width="300"/>
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
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):<Preloader/>}
                <Footer/>
            </div>
        );
    }

}

export default TreeDetail;
