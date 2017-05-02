/**
 * Created by pratikgarala on 10/4/17.
 */

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAmxVyuzxel5CTHz8o_DOTXqh588wbJSsY",
    authDomain: "ornithopedia-adc32.firebaseapp.com",
    databaseURL: "https://ornithopedia-adc32.firebaseio.com",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
