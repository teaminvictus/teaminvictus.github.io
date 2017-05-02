/**
 * Created by pratikgarala on 18/4/17.
 */
import React from 'react';
import store from '../store/store';

var birdUrl = null;
var bird = [];

// const renderImgUrl = (birdId, valid_data) => {
//     if(valid_data.localeCompare("Yes") == 0){
//         birdUrl = require("../../images/Birds/Repository/" + birdId + ".jpg");
//     }else{
//         birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
//     }
// };

const TreeDetail = ({match}) => (

    <div className="treeDetail">
        {/*{console.log(store.getState())}*/}
        <div id={store.getState().trees.selectedTree.treeId} className="image-modal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="modal-body birdTitle">
                            <h4>{store.getState().trees.selectedTree.commonName}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 card image-item">
                            {/*{renderImgUrl(bird.bird_Id, bird.valid_data)}*/}
                            <img src={"/" + store.getState().trees.treeUrl} height="200" width="300"/>
                            <div className="title">
                                    <span>
                                        {store.getState().trees.selectedTree.commonName}
                                    </span>
                            </div>
                        </div>
                        <div className="col-lg-8 birdDescription">
                            <p>
                                {store.getState().trees.selectedTree.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);



export default TreeDetail;
