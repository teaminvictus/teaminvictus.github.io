/**
 * Created by pratikgarala on 7/5/17.
 */
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getBirds, displayMatchesForRecordSighting, selectBirdForRecordSighting} from '../actions/get_birds';
import { getPostcodes, displayPostcodeMatches, selectPostcodeForRecordSighting } from '../actions/get_postcodes';
import RecordSightings from '../components/recordSightings';

function mapStateToProps(state) {
    return {
        birds: state.birds,
        postcodes: state.postcodes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds()),
        onDisplayMatches: () => dispatch(displayMatchesForRecordSighting()),
        onDisplayPostcodeMatches: () => dispatch(displayPostcodeMatches()),
        onSelectBird: (bird) => dispatch(selectBirdForRecordSighting(bird)),
        onGetPostcodes: () => dispatch(getPostcodes()),
        onSelectPostcode : (postcode) => dispatch(selectPostcodeForRecordSighting(postcode))
        // onChangeBirdsForPage: (birdsForPage) => dispatch(changeBirdsForPage(birdsForPage))
    };
}



const RecordSightingsContainer = connect(mapStateToProps, mapDispatchToProps)(RecordSightings);

export default RecordSightingsContainer;