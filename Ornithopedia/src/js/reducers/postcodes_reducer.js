/**
 * Created by pratikgarala on 17/4/17.
 */

import ActionTypes from '../constants/action_types';

export function postcodesReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetPostcodesRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetPostcodesRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting postcodes.',
            });
        }
        case ActionTypes.GetPostcodesFulfilled: {
            const postcodes = action.postcodes;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got postcodes.',
                postcodes: postcodes
            });
            return newState;
        }
        case ActionTypes.filterPostcodesByName: {

            const matchPostcodes = action.matchPostcodes;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered birds.',
                matchPostcodes : matchPostcodes,
            });
            return newState;
        }
        case ActionTypes.filterPostcodesForRecordSightingByName: {

            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered birds for Record Sighting.',
                matchPostcodesForRecordSighting : action.matchPostcodesForRecordSighting,
            });
            return newState;
        }
        case ActionTypes.GetSelectedPostcodeFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Postcode Selected',
                selectedPostcode : action.selectedPostcode,
                matchPostcodes : action.matchPostcodes
            });
            return newState;
        }
        case ActionTypes.GetSelectedPostcodeForRecordSightingFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Postcode Selected',
                selectedPostcodeForRecordSighting : action.selectedPostcodeForRecordSighting,
                matchPostcodesForRecordSighting : action.matchPostcodesForRecordSighting
            });
            return newState;
        }
        default:
            return state;
    }
}
