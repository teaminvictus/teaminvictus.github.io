/**
 * Created by pratikgarala on 17/4/17.
 */

import { connect } from 'react-redux';
import { getTrees, displayMatches, changeTreesForPage, selectTree} from '../actions/get_trees';

import FindTrees from '../components/findTrees';

function mapStateToProps(state) {
    return {
        trees: state.trees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetTrees: () => dispatch(getTrees()),
        onDisplayMatches: () => dispatch(displayMatches()),
        onSelectTree: (tree) => dispatch(selectTree(tree)),
        onChangeTreesForPage: (treesForPage) => dispatch(changeTreesForPage(treesForPage))
    };
}



const FindTreesContainer = connect(mapStateToProps, mapDispatchToProps)(FindTrees);

export default FindTreesContainer;