/**
 * Created by pratikgarala on 17/4/17.
 */

import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';


export function getTrees() {
    return dispatch => {
        dispatch(getTreesRequestedAction());
        return database.ref('tree_master').once('value', snap => {
            const trees = snap.val();
            dispatch(getTreesFulfilledAction(trees))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getTreesRejectedAction());
            });
    }
}

function getTreesRequestedAction() {
    return {
        type: ActionTypes.GetTreesRequested
    };
}

function getTreesRejectedAction() {
    return {
        type: ActionTypes.GetTreesRejected
    }
}



function getTreesFulfilledAction(trees) {
    return {
        type: ActionTypes.GetTreesFulfilled,
        trees
    };
}

export function displayMatches(){
    // value of input field
    var wordToMatch = $("search").prevObject[0].activeElement.value;

    // value of Birds
    var trees = store.getState().trees.trees;
    const matchTrees = findMatches(wordToMatch, trees);
    return dispatch => {
        dispatch(filterTreesByNameAction(matchTrees))
    };
}

function findMatches(wordToMatch, trees) {
    return trees.filter(tree => {
        const regex = new RegExp(wordToMatch, 'gi');
        return tree.commonName.match(regex);
    });
}

function filterTreesByNameAction(matchTrees){

    return {
        type: ActionTypes.filterTreesByName,
        matchTrees
    }
}

export function changeTreesForPage(treesForPage){
    return{
        type : ActionTypes.changeTreesForPage,
        treesForPage
    }
}

export function selectTree(tree){

    if(tree.isImageAvailable == 1){
        var treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
    }else{
        var treeUrl = require("../../images/Trees/treePlaceholder.jpg");
    }
    return{
        type : ActionTypes.treeSelected,
        selectedTree : tree,
        treeUrl : treeUrl
    }
}