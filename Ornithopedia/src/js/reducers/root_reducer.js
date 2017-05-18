/**
 * Created by pratikgarala on 10/4/17.
 */

import { combineReducers } from 'redux';
import { birdsReducer } from './birds_reducer';
import { treesReducer } from './trees_reducer';
import { postcodesReducer } from './postcodes_reducer';
import { auStatesReducer } from './state_reducer';
import { birdIdentifierReducer } from './birdIdentifier_reducer';
import { matrixReducer } from './matrix_reducer';

const rootReducer = combineReducers({
    birds: birdsReducer,
    trees: treesReducer,
    postcodes : postcodesReducer,
    auStates : auStatesReducer,
    birdsForIdentifier : birdIdentifierReducer,
    matrix : matrixReducer
});

export default rootReducer;