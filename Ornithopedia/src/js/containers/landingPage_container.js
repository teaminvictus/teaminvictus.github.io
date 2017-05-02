/**
 * Created by pratikgarala on 22/4/17.
 */
import { connect } from 'react-redux';

import { getBirds} from '../actions/get_birds';
import LandingPage from '../components/landingPage';

function mapStateToProps(state) {
    return {
        birds: state.birds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds())
    };
}



const LandingPageContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;