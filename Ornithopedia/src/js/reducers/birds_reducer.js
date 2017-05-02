/**
 * Created by pratikgarala on 10/4/17.
 */

import ActionTypes from '../constants/action_types';

export function birdsReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetBirdsRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetBirdsRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting birds.',
            });
        }
        case ActionTypes.GetBirdsFulfilled: {
            const birds = action.birds;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got birds.',
                birds : birds,
                matchBirds : birds,
                birdsForPage : birds.length > 8 ? birds.slice(0, 8) : birds
            });
            return newState;
        }
        case ActionTypes.filterBirdsByName: {
            const matchBirds = action.matchBirds;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered birds.',
                matchBirds : matchBirds,
                birdsForPage : matchBirds.length > 8 ? matchBirds.slice(0, 8) : matchBirds
            });
            return newState;
        }
        case ActionTypes.changeBirdsForPage: {
            const birdsForPage = action.birdsForPage;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got birds for page.',
                birdsForPage : birdsForPage
            });
            return newState;
        }
        case ActionTypes.GetSelectedBirdRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetSelectedBirdRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting selected bird.',
            });
        }
        case ActionTypes.GetSelectedBirdFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Bird Selected',
                selectedBird : action.selectedBird
            });
            return newState;
        }
        case ActionTypes.GetBirdCountRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetBirdCountRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting bird count.',
            });
        }
        case ActionTypes.GetBirdCountFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Bird Selected',
                selectedBirdCount : action.selectedBirdCount
            });
            return newState;
        }

        default:
            return state;
    }
}
