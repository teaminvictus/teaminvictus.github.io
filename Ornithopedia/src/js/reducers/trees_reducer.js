/**
 * Created by pratikgarala on 17/4/17.
 */

import ActionTypes from '../constants/action_types';

export function treesReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetTreesRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetTreesRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting trees.',
            });
        }
        case ActionTypes.GetTreesFulfilled: {
            const trees = action.trees;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got trees.',
                trees: trees,
                matchTrees : trees,
                treesForPage : trees.length > 8 ? trees.slice(0, 8) : trees
            });
            return newState;
        }
        case ActionTypes.filterTreesByName: {

            const matchTrees = action.matchTrees;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered Trees.',
                matchTrees : matchTrees,
                treesForPage : matchTrees.length > 8 ? matchTrees.slice(0, 8) : matchTrees
            });
            return newState;
            return state;
        }
        case ActionTypes.changeTreesForPage: {
            const treesForPage = action.treesForPage;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got Trees for page.',
                treesForPage : treesForPage
            });
            return newState;
            return state;
        }
        case ActionTypes.treeSelected: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Tree Selected',
                selectedTree : action.selectedTree,
                treeUrl : action.treeUrl
            });
            return newState;
        }
        case ActionTypes.GetLikelyBirdsRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetLikelyBirdsRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting likely Birds for selected tree.',
            });
        }
        case ActionTypes.GetLikelyBirdsFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'likely birds Selected',
                likelyBirds : action.likelyBirds
            });
            return newState;
        }
        case ActionTypes.GetSelectedTreeFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'tree Selected',
                selectedTree : action.selectedTree
            });
            return newState;
        }
        default:
            return state;
    }
}
