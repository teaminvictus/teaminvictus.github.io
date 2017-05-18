/**
 * Created by pratikgarala on 6/5/17.
 */
import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';

export function getLikelyBirds(selectedTree) {
    return dispatch => {
        dispatch(getLikelyBirdsRequestedAction());
        console.log(selectedTree);
        var orderByState = "nsw";
        if(selectedTree.nsw == 1)
            orderByState = "nsw";
        else if(selectedTree.vic == 1)
            orderByState = "vic";
        else if(selectedTree.qld == 1)
            orderByState = "qld";
        else if(selectedTree.sa == 1)
            orderByState = "sa";
        else if(selectedTree.wa == 1)
            orderByState = "wa";
        else if(selectedTree.tas == 1)
            orderByState = "tas";
        else if(selectedTree.act == 1)
            orderByState = "act";
        else if(selectedTree.nt == 1)
            orderByState = "nt";


        var i = 0;
        return database.ref('birds_master').orderByChild(orderByState).equalTo("Yes").once('value', snap => {
            var likelyBirds = [];
            snap.forEach((child) => {
                if(i < 4) {
                    if(child.val().fruit == 1 && selectedTree.fruit == 1 ||
                        child.val().insect == 1 && selectedTree.insect == 1 ||
                        child.val().nectar == 1 && selectedTree.nectar == 1 ||
                        child.val().seed == 1 && selectedTree.seed == 1 ) {
                        likelyBirds.push(child.val());
                        i++;
                    }
                }
            });
            dispatch(getLikelyBirdsFulfilledAction(likelyBirds))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getLikelyBirdsRejectedAction());
            });
    }
}

function getLikelyBirdsRequestedAction() {
    return {
        type: ActionTypes.GetLikelyBirdsRequested
    };
}

function getLikelyBirdsRejectedAction() {
    return {
        type: ActionTypes.GetLikelyBirdsRejected
    }
}

function getLikelyBirdsFulfilledAction(likelyBirds) {
    return {
        type: ActionTypes.GetLikelyBirdsFulfilled,
        likelyBirds
    };
}