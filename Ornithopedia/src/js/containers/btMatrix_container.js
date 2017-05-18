/**
 * Created by pratikgarala on 29/4/17.
 */
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import { getPostcodes, displayMatches, selectPostcode, filterBirdsForIdentifierAction } from '../actions/get_postcodes';
import { getTrees, selectTree} from '../actions/get_trees';
import { getTreesInLocation } from '../actions/get_btMatrixDetail';
// import { getAuStatesFulfilledAction, displayStatesMatches, selectAuState } from '../actions/get_auStates';
import { getBirds} from '../actions/get_birds';
import {setStep} from '../actions/get_btMatrixDetail';
import BTMatrix from '../components/btMatrix';
// import PickLocation from '../components/btPickLocation';

function mapStateToProps(state) {
    return {
        birds: state.birds,
        postcodes: state.postcodes,
        trees: state.trees,
        // auStates: state.auStates,
        birdsForIdentifier: state.birdsForIdentifier,
        matrix: state.matrix
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds()),
        onGetTrees: () => dispatch(getTrees()),
        onGetPostcodes: () => dispatch(getPostcodes()),
        // onGetAuStates: () => dispatch(getAuStatesFulfilledAction()),
        onDisplayMatches: () => dispatch(displayMatches()),
        // onDisplayStatesMatches: () => dispatch(displayStatesMatches()),
        // onSelectAuState: (auState) => dispatch(selectAuState(auState)),
        onSelectPostcode: (postcode) => dispatch(selectPostcode(postcode)),
        onGetTreesInLocation: (postcode) => dispatch(getTreesInLocation(postcode)),
        // onFilterBirdsForIdentifier: (type) => dispatch(filterBirdsForIdentifierAction(type))
        onSelectTree: (tree) => dispatch(selectTree(tree)),
        onSetStep: (stepNo) => dispatch(setStep(stepNo))
    };
}

const BTMatrixContainer = connect(mapStateToProps, mapDispatchToProps)(BTMatrix);

export default BTMatrixContainer;