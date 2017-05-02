/**
 * Created by pratikgarala on 10/4/17.
 */

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getBirds, displayMatches, selectBird, changeBirdsForPage} from '../actions/get_birds';
import FindBirds from '../components/findBirds';

function mapStateToProps(state) {
    return {
        birds: state.birds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds()),
        onDisplayMatches: () => dispatch(displayMatches()),
        onSelectBird: (bird) => dispatch(selectBird(bird)),
        onChangeBirdsForPage: (birdsForPage) => dispatch(changeBirdsForPage(birdsForPage))
    };
}



const FindBirdsContainer = connect(mapStateToProps, mapDispatchToProps)(FindBirds);

export default FindBirdsContainer;