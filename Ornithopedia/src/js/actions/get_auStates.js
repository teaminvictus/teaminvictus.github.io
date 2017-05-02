/**
 * Created by pratikgarala on 19/4/17.
 */
import ActionTypes from '../constants/action_types';
import store from '../store/store';

export function getAuStatesFulfilledAction() {
    return {
        type: ActionTypes.GetAuStatesFulfilled
    };
}


export function displayStatesMatches() {
    var wordToMatch = $("search").prevObject[0].activeElement.value;
    if(wordToMatch.length == 0) {
        wordToMatch = "!@#$%^&*()";
    }
    // value of Birds
    var auStates = store.getState().auStates.auStates;
    const matchAuStates = findMatches(wordToMatch, auStates);
    return dispatch => {
        dispatch(filterAuStatesByNameAction(matchAuStates))
    };
}


function findMatches(wordToMatch, auStates) {
    return auStates.filter(auState => {
        const regex = new RegExp(wordToMatch, 'gi');
        return auState.id.match(regex) || auState.value.match(regex);
    });
}

function filterAuStatesByNameAction(matchAuStates){
    return {
        type: ActionTypes.filterAuStatesByName,
        matchAuStates
    }
}

export function selectAuState(auState){

    $("#auStateInput").val(auState.value);

    const matchAuStates = [];
    return{
        type : ActionTypes.GetSelectedAuStateFulfilled,
        selectedAuState : auState,
        matchAuStates
    }
}