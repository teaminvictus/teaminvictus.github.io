/**
 * Created by pratikgarala on 18/4/17.
 */
import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';
import {getBirds} from './get_birds';


export function getPostcodes() {
    return dispatch => {
        dispatch(getPostcodesRequestedAction());
        return database.ref('postcode_master').once('value', snap => {
            const postcodes = snap.val();
            dispatch(getPostcodesFulfilledAction(postcodes))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getPostcodesRejectedAction());
            });
    }
}

function getPostcodesRequestedAction() {
    return {
        type: ActionTypes.GetPostcodesRequested
    };
}

function getPostcodesRejectedAction() {
    return {
        type: ActionTypes.GetPostcodesRejected
    }
}



function getPostcodesFulfilledAction(postcodes) {
    return {
        type: ActionTypes.GetPostcodesFulfilled,
        postcodes
    };
}

export function displayMatches(){
    // value of input field
    // $("#birdImages").empty();
    var wordToMatch = $("search").prevObject[0].activeElement.value;
    if(wordToMatch.length == 0) {
        wordToMatch = "!@#$%^&*()";
    }
    // value of postcodes
    var postcodes = [];
    if (store.getState().postcodes.postcodes != null){
        postcodes = store.getState().postcodes.postcodes;
    }
    const matchPostcodes = findMatches(wordToMatch, postcodes);
    return dispatch => {
        dispatch(filterPostcodesByNameAction(matchPostcodes))
    };
}

function findMatches(wordToMatch, postcodes) {
    return postcodes.filter(postcode => {
        const regex = new RegExp(wordToMatch, 'gi');
        return postcode.suburb.match(regex) || postcode.state.match(regex) || postcode.postcode.match(regex);
    });
}

function filterPostcodesByNameAction(matchPostcodes){
    return {
        type: ActionTypes.filterPostcodesByName,
        matchPostcodes
    }
}

export function selectPostcode(postcode){

    $("#postcodeInput").val(postcode.suburb + ", " + postcode.state + ", " + postcode.postcode);


    return dispatch => {
        // if (store.getState().birds.birds == null){
        //     dispatch(getBirds());
        // };
        dispatch(getSelectedPostcodeFulfilled(postcode));
        const url = "http://ebird.org/ws1.1/data/obs/geo/recent?lng="+ postcode.longitude +"&lat=" + postcode.latitude + "&dist=5&back=7&maxResults=500&fmt=json";
        $.getJSON(url, function(data) {
        }).done(function(data){
            var birdsForIdentifier = [];

            for ( var i=0, len=data.length; i < len; i++ )
                birdsForIdentifier[data[i]['comName']] = data[i].comName;

            data = new Array();
            for ( var key in birdsForIdentifier )
                data.push(birdsForIdentifier[key]);

            const birds = store.getState().birds.birds;

            birdsForIdentifier = new Array();
            data.map(birdName => {
                const b = birds.filter(bird => (bird.commonName.localeCompare(birdName.replace('-', ' ')) == 0))[0];
                if (b != null)
                    birdsForIdentifier.push(b);
            });
            dispatch(getBirdsForIdentifierAction(birdsForIdentifier))
        });
    };
}

function getSelectedPostcodeFulfilled (postcode){
    const matchPostcodes = [];
    return{
        type : ActionTypes.GetSelectedPostcodeFulfilled,
        selectedPostcode : postcode,
        matchPostcodes
    }
}


function getBirdsForIdentifierAction(birdsForIdentifier) {
    return {
        type: ActionTypes.GetBirdsForIdentifier,
        birdsForIdentifier,
    };
}

export function filterBirdsForIdentifierAction(type){
    var filteredBirdsForIdentifier = [];
    if(store.getState().birdsForIdentifier.birdsForIdentifier != null){
        const birdsForIdentifier = store.getState().birdsForIdentifier.birdsForIdentifier;
        if (type.localeCompare("")==0)
            filteredBirdsForIdentifier = birdsForIdentifier
        else
            filteredBirdsForIdentifier = birdsForIdentifier.filter(bird => (bird.size == type));
    }
    return {
        type: ActionTypes.GetFilteredBirdsForIdentifier,
        birdsForIdentifier : filteredBirdsForIdentifier
    };
}