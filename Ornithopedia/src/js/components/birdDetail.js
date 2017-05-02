/**
 * Created by pratikgarala on 13/4/17.
 */
import React from 'react';

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

    componentDidMount() {
        this.props.onSelectedBird(this.props.match.params.bird_Id);
        this.props.onGetBirdCount(this.props.match.params.bird_Id);
    }


    render() {
        const selectedBird = this.props.birds.selectedBird;
        return (
            <div className="birdDetail">

                {selectedBird != null ? (
                <div id={selectedBird.birdId} className="image-modal">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="modal-body birdTitle">
                                    <h4>{selectedBird.commonName}</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 card image-item">
                                    {renderImgUrl(selectedBird)}
                                    <img src={"/" + birdUrl} height="200" width="300"/>
                                    <div className="title">
                                    <span>
                                        {selectedBird.commonName}
                                    </span>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-lg-offset-1 birdDescription">
                                    <p>
                                        {selectedBird.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*</div>*/}
                </div> ) : null }
            </div>
        );
    }
}


// const BirdDetail = ({match}) => (
//
//
// );



export default BirdDetail;