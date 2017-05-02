/**
 * Created by pratikgarala on 20/4/17.
 */
import ActionTypes from '../constants/action_types';

export function birdIdentifierReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetBirdsForIdentifier: {
            const birdsForIdentifier = action.birdsForIdentifier;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got birds for identifier',
                birdsForIdentifier: birdsForIdentifier,
                filteredBirdsForIdentifier : birdsForIdentifier
            });
            return newState;
        }
        case ActionTypes.GetFilteredBirdsForIdentifier: {
            const birdsForIdentifier = action.birdsForIdentifier;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got Filtered birds for identifier',
                filteredBirdsForIdentifier: birdsForIdentifier
            });
            return newState;
        }
        default:
            return state;
    }
}
