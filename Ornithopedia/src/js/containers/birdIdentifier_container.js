/**
 * Created by pratikgarala on 18/4/17.
 */
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getPostcodes, displayMatches, selectPostcode, filterBirdsForIdentifierAction } from '../actions/get_postcodes';
import { getAuStatesFulfilledAction, displayStatesMatches, selectAuState } from '../actions/get_auStates';
import { getBirds} from '../actions/get_birds';

import BirdIdentifier from '../components/birdIdentifier';

function mapStateToProps(state) {
    return {
        postcodes: state.postcodes,
        auStates: state.auStates,
        birdsForIdentifier: state.birdsForIdentifier
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds()),
        onGetPostcodes: () => dispatch(getPostcodes()),
        onGetAuStates: () => dispatch(getAuStatesFulfilledAction()),
        onDisplayMatches: () => dispatch(displayMatches()),
        onDisplayStatesMatches: () => dispatch(displayStatesMatches()),
        onSelectAuState: (auState) => dispatch(selectAuState(auState)),
        onSelectPostcode: (postcode) => dispatch(selectPostcode(postcode)),
        onFilterBirdsForIdentifier: (type) => dispatch(filterBirdsForIdentifierAction(type))
    };
}

const BirdIdentifierContainer = connect(mapStateToProps, mapDispatchToProps)(BirdIdentifier);

export default BirdIdentifierContainer;