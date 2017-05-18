/**
 * Created by pratikgarala on 11/5/17.
 */

import ActionTypes from '../constants/action_types';

export function matrixReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.SetMatrixStep: {
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Setting Matrix Step',
                stepNo : action.stepNo
            });
        }
        default:
            return state;
    }
}