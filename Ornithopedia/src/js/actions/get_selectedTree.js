/**
 * Created by pratikgarala on 23/4/17.
 */

import ActionTypes from '../constants/action_types';
import database from './database';
import {getLikelyBirds} from './get_likelyBirds';

export function getSelectedTree(treeId) {
    return dispatch => {
        dispatch(getSelectedTreeRequestedAction());
        return database.ref('tree_master').orderByChild("treeId").equalTo(parseInt(treeId)).once('value', snap => {
            var selectedTree;
            var treeKey;
            snap.forEach((child) => {
                selectedTree = child.val();
                treeKey = child.key
            });
            dispatch(getSelectedTreeFulfilledAction(selectedTree));
            dispatch(getLikelyBirds(selectedTree));
        })
            .catch((error) => {
                console.log(error);
                dispatch(getSelectedTreeRejectedAction());
            });
    }
}

function getSelectedTreeRequestedAction() {
    return {
        type: ActionTypes.GetSelectedTreeRequested
    };
}

function getSelectedTreeRejectedAction() {
    return {
        type: ActionTypes.GetSelectedTreeRejected
    }
}

export function getSelectedTreeFulfilledAction(selectedTree) {
    return {
        type: ActionTypes.GetSelectedTreeFulfilled,
        selectedTree
    };
}

export function setUnSelectedTree(){
    const selectedTree = null;
    return dispatch => {
        dispatch(getSelectedTreeFulfilledAction(selectedTree));
    }
}