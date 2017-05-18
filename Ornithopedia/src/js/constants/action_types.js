/**
 * Created by pratikgarala on 10/4/17.
 */
const actionTypes = {
    GetBirdsRequested: 'GET_BIRDS_REQUESTED',
    GetSelectedBirdRequested: 'GET_SELECTED_BIRD_REQUESTED',
    GetBirdsRejected: 'GET_BIRDS_REJECTED',
    GetSelectedBirdRejected: 'GET_SELECTED_BIRD_REJECTED',
    GetBirdsFulfilled: 'GET_BIRDS_FULFILLED',
    GetSelectedBirdFulfilled: 'GET_SELECTED_BIRD_FULFILLED',

    GetBirdCountRequested: 'GET_BIRD_COUNT_REQUESTED',
    GetBirdCountRejected: 'GET_BIRD_COUNT_REJECTED',
    GetBirdCountFulfilled: 'GET_BIRD_COUNT_FULFILLED',

    GetLikelyTreesRequested: 'GET_LIKELY_TREES_REQUESTED',
    GetLikelyTreesRejected: 'GET_LIKELY_TREES_REJECTED',
    GetLikelyTreesFulfilled: 'GET_LIKELY_TREES_FULFILLED',

    GetLikelyBirdsRequested: 'GET_LIKELY_BIRDS_REQUESTED',
    GetLikelyBirdsRejected: 'GET_LIKELY_BIRDS_REJECTED',
    GetLikelyBirdsFulfilled: 'GET_LIKELY_BIRDS_FULFILLED',


    GetTreesRequested: 'GET_TREES_REQUESTED',
    GetSelectedTreeRequested: 'GET_SELECTED_TREE_REQUESTED',
    GetTreesRejected: 'GET_TREES_REJECTED',
    GetSelectedTreeRejected: 'GET_SELECTED_TREE_REJECTED',
    GetTreesFulfilled: 'GET_TREES_FULFILLED',
    GetSelectedTreeFulfilled: 'GET_SELECTED_TREE_FULFILLED',

    GetPostcodesRequested: 'GET_POSTCODES_REQUESTED',
    GetSelectedPostcodeRequested: 'GET_SELECTED_POSTCODE_REQUESTED',
    GetPostcodesRejected: 'GET_POSTCODES_REJECTED',
    GetSelectedPostcodeRejected: 'GET_SELECTED_POSTCODE_REJECTED',
    GetPostcodesFulfilled: 'GET_POSTCODES_FULFILLED',
    GetSelectedPostcodeFulfilled: 'GET_SELECTED_POSTCODE_FULFILLED',


    GetSelectedPostcodeForRecordSightingFulfilled: 'GET_SELECTED_POSTCODE_FOR_RECORD_SIGHTING_FULFILLED',
    GetSelectedBirdForRecordSightingFulfilled: 'GET_SELECTED_BIRD_FOR_RECORD_SIGHTING_FULFILLED',

    filterBirdsByName: 'FILTER_BIRDS_BY_NAME',
    filterBirdsForRecordSightingByName: 'FILTER_FOR_RECORD_SIGHTING_BIRDS_BY_NAME',
    birdSelected: 'BIRD_SELECTED',
    changeBirdsForPage : 'CHANGE_BIRDS_FOR_PAGE',

    filterTreesByName: 'FILTER_TREES_BY_NAME',
    treeSelected: 'TREE_SELECTED',
    changeTreesForPage : 'CHANGE_TREES_FOR_PAGE',

    filterPostcodesByName: 'FILTER_POSTCODES_BY_NAME',
    filterPostcodesForRecordSightingByName: 'FILTER_POSTCODES_FOR_RECORD_SIGHTING_BY_NAME',

    GetAuStatesFulfilled: 'GET_AU_STATES_FULFILLED',
    filterAuStatesByName: 'FILTER_AU_STATES_BY_NAME',
    GetSelectedAuStateFulfilled: 'GET_SELECTED_AU_STATE_FULFILLED',

    GetBirdsForIdentifierRequested : 'GET_BIRDS_FOR_IDENTIFIER_REQUESTED',
    GetBirdsForIdentifier : 'GET_BIRDS_FOR_IDENTIFIER',
    GetFilteredBirdsForIdentifier : 'GET_FILTERED_BIRDS_FOR_IDENTIFIER',

    ConvertImageToBase64 : 'CONVERT_IMAGE_TO_BASE64',

    SetMatrixStep : 'SET_MATRIX_STEP'
};

export default actionTypes;