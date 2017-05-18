/**
 * Created by pratikgarala on 6/5/17.
 */
import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';

export function getLikelyTrees(selectedBird) {
    return dispatch => {
        dispatch(getLikelyTreesRequestedAction());
        console.log(selectedBird);
        var orderByState = "nsw";
        if(selectedBird.nsw == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "nsw";
        else if(selectedBird.vic == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "vic";
        else if(selectedBird.qld == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "qld";
        else if(selectedBird.sa == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "sa";
        else if(selectedBird.wa == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "wa";
        else if(selectedBird.tas == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "tas";
        else if(selectedBird.act == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "act";
        else if(selectedBird.nt == "Yes" || selectedBird.nsw == "Endangered")
            orderByState = "nt";


        var i = 0
        return database.ref('tree_master').orderByChild(orderByState).equalTo(1).once('value', snap => {
            var likelyTrees = [];
            snap.forEach((child) => {
                if(i < 4) {
                    if(child.val().fruit == 1 && selectedBird.fruit == 1 ||
                        child.val().insect == 1 && selectedBird.insect == 1 ||
                        child.val().nectar == 1 && selectedBird.nectar == 1 ||
                        child.val().seed == 1 && selectedBird.seed == 1 ) {
                        likelyTrees.push(child.val());
                        i++;
                    }
                }
            });
            console.log(likelyTrees);
            dispatch(getLikelyTreesFulfilledAction(likelyTrees))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getLikelyTreesRejectedAction());
            });
    }
}

function getLikelyTreesRequestedAction() {
    return {
        type: ActionTypes.GetLikelyTreesRequested
    };
}

function getLikelyTreesRejectedAction() {
    return {
        type: ActionTypes.GetLikelyTreesRejected
    }
}

function getLikelyTreesFulfilledAction(likelyTrees) {
    return {
        type: ActionTypes.GetLikelyTreesFulfilled,
        likelyTrees
    };
}