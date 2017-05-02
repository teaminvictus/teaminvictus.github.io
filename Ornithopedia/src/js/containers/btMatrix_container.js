/**
 * Created by pratikgarala on 29/4/17.
 */
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import { getPostcodes, displayMatches, selectPostcode, filterBirdsForIdentifierAction } from '../actions/get_postcodes';
// import { getAuStatesFulfilledAction, displayStatesMatches, selectAuState } from '../actions/get_auStates';
import { getBirds} from '../actions/get_birds';

import BTMatrix from '../components/btMatrix';
// import PickLocation from '../components/btPickLocation';

function mapStateToProps(state) {
    return {
        birds: state.birds,
        postcodes: state.postcodes,
        // auStates: state.auStates,
        birdsForIdentifier: state.birdsForIdentifier
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds()),
        onGetPostcodes: () => dispatch(getPostcodes()),
        // onGetAuStates: () => dispatch(getAuStatesFulfilledAction()),
        onDisplayMatches: () => dispatch(displayMatches()),
        // onDisplayStatesMatches: () => dispatch(displayStatesMatches()),
        // onSelectAuState: (auState) => dispatch(selectAuState(auState)),
        onSelectPostcode: (postcode) => dispatch(selectPostcode(postcode)),
        // onFilterBirdsForIdentifier: (type) => dispatch(filterBirdsForIdentifierAction(type))
    };
}

const BTMatrixContainer = connect(mapStateToProps, mapDispatchToProps)(BTMatrix);

export default BTMatrixContainer;