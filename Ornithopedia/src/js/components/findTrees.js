/**
 * Created by pratikgarala on 17/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';

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
                                            <Link to={"/treeFinder/" + tree.treeId} onClick={() => {this.props.onSelectTree(tree)}}>
                                            {/*<Link to={"/treeFinder/" + tree.treeId}>*/}
                                                <div className="image-link">
                                                    <div className="caption">
                                                        <div className="caption-content">
                                                            <i className="fa fa-search-plus fa-3x"/>
                                                        </div>
                                                    </div>
                                                    <img src={treeUrl} height="200" width="300"/>
                                                    <div className="title">
                                                        <span>{tree.commonName}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
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

            </section>
        );
    }
}

