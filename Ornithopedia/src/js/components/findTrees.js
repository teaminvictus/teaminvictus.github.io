/**
 * Created by pratikgarala on 17/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Footer from './footer';
import Preloader from './preloader';

const IMAGES_PER_PAGE = 8;

export default class FindTrees extends React.Component {


    constructor() {
        super();
        this.state = {
            activePage: 1
        };
    }


    componentDidMount() {

        if(this.props.trees.trees == null){
            this.props.onGetTrees();
        }
    }

    handlePageChange(pageNumber) {
        var treesForPage = this.props.trees.matchTrees.slice(
            (pageNumber - 1) * IMAGES_PER_PAGE,
            (((pageNumber - 1) * IMAGES_PER_PAGE ) + IMAGES_PER_PAGE) > this.props.trees.matchTrees.length ? this.props.trees.matchTrees.length : (((pageNumber - 1) * IMAGES_PER_PAGE ) + IMAGES_PER_PAGE));
        this.setState({activePage: pageNumber});
        //
        this.props.onChangeTreesForPage(treesForPage);
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
        const trees = this.props.trees.matchTrees;
        const treeCount = trees && trees.length;
        const treesForPage = this.props.trees.treesForPage;
        return (
            <section id="treeFinder">

                <div className="searchBar">
                    <div className="container">
                        <form >
                            <input type="text"  placeholder="Enter Tree Name..." onChange={() => {this.props.onDisplayMatches()}} />
                        </form>
                    </div>
                </div>

                <div id="treeImages">
                    <center>
                        {treesForPage && treesForPage.length > 0 ? (
                            <div>
                                {treesForPage.map((tree, index) => {

                                    if(tree.isImageAvailable == 1){
                                        var treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
                                    }else{
                                        var treeUrl = require("../../images/Trees/treePlaceholder.jpg");
                                    }
                                    return (
                                        <div key={tree.treeId} className="card image-item">
                                                <div className="image-link">
                                                    {/*<Link to={"/treeFinder/" + tree.treeId} onClick={() => {this.props.onSelectTree(tree)}}>*/}
                                                    <Link to={"/treeFinder" + tree.treeId}>
                                                        <div className="caption">
                                                            <div className="caption-content">
                                                                <i className="fa fa-search-plus fa-3x"/>
                                                            </div>
                                                        </div>
                                                        <img src={treeUrl} height="200" width="300"/>
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
                        ) : <Preloader/>}
                    </center>
                    {/*</div>*/}

                    <div id="treePagination">
                        <center>
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={IMAGES_PER_PAGE}
                                totalItemsCount= {treeCount}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </center>
                    </div>

                </div>
                <Footer/>
            </section>
        );
    }
}

