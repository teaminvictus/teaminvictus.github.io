/**
 * Created by pratikgarala on 23/4/17.
 */

import ActionTypes from '../constants/action_types';
import database from './database';
import {getLikelyTrees} from './get_likelyTrees';
import {getBirdCountFulfilledAction} from './get_birdcount';

export function getSelectedBird(birdId) {
    return dispatch => {
        dispatch(getSelectedBirdRequestedAction());
        return database.ref('birds_master').orderByChild("birdId").equalTo(birdId).once('value', snap => {
            var selectedBird;
            var birdKey;
            snap.forEach((child) => {
                selectedBird = child.val();
                birdKey = child.key
            });
            dispatch(getSelectedBirdFulfilledAction(selectedBird));
            dispatch(getLikelyTrees(selectedBird));
        })
            .catch((error) => {
                console.log(error);
                dispatch(getSelectedBirdRejectedAction());
            });
    }
}

function getSelectedBirdRequestedAction() {
    return {
        type: ActionTypes.GetSelectedBirdRequested
    };
}

function getSelectedBirdRejectedAction() {
    return {
        type: ActionTypes.GetSelectedBirdRejected
    }
}

export function getSelectedBirdFulfilledAction(selectedBird) {
    return {
        type: ActionTypes.GetSelectedBirdFulfilled,
        selectedBird
    };
}

export function setUnSelectedBird() {
    const selectedBird = null;
    const selectedBirdCount = null;
    return dispatch => {
        dispatch(getSelectedBirdFulfilledAction(selectedBird));
        dispatch(getBirdCountFulfilledAction(selectedBirdCount));
    }
}