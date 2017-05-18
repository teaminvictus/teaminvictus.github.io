/**
 * Created by pratikgarala on 23/4/17.
 */
import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';

export function getBirdCount(birdId) {
    return dispatch => {
        dispatch(getBirdCountRequestedAction());
        return database.ref('birdCount').orderByChild("birdId").equalTo(birdId).once('value', snap => {
            var birdCount = [];
            snap.forEach((child) => {
                birdCount.push(child.val());
            });
            dispatch(getBirdCountFulfilledAction(birdCount))
        })
        .catch((error) => {
            console.log(error);
            dispatch(getBirdCountRejectedAction());
        });
    }
}

function getBirdCountRequestedAction() {
    return {
        type: ActionTypes.GetBirdCountRequested
    };
}

function getBirdCountRejectedAction() {
    return {
        type: ActionTypes.GetBirdCountRejected
    }
}

export function getBirdCountFulfilledAction(selectedBirdCount) {
    return {
        type: ActionTypes.GetBirdCountFulfilled,
        selectedBirdCount
    };
}