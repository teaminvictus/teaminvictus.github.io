/**
 * Created by pratikgarala on 19/4/17.
 */

import ActionTypes from '../constants/action_types';

export function auStatesReducer(state = {}, action) {

    switch(action.type) {
        case ActionTypes.GetAuStatesFulfilled: {

            const auStates = [
                {
                    id : "NSW",
                    value : "New South Wales"
                },
                {
                    id : "QLD",
                    value : "Queensland"
                },
                {
                    id : "VIC",
                    value : "Victoria"
                },
                {
                    id : "ACT",
                    value : "Australian Capital Territory"
                },
                {
                    id : "SA",
                    value : "South Australia"
                },
                {
                    id : "TAS",
                    value : "Tasmania"
                },
                {
                    id : "WA",
                    value : "Western Australia"
                },
                {
                    id : "NT",
                    value : "Northern Territory"
                }
            ];
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Got Australian States.',
                auStates: auStates,
            });
        }
        case ActionTypes.filterAuStatesByName: {

            const matchAuStates = action.matchAuStates;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered Australian States.',
                matchAuStates : matchAuStates,
            });
            return newState;
        }
        case ActionTypes.GetSelectedAuStateFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Au State Selected',
                selectedAuState : action.selectedAuState,
                matchAuStates : action.matchAuStates
            });
            return newState;
        }
        default:
            return state;
    }


}