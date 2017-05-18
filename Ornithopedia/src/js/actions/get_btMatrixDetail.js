import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';

export function setStep(stepNo){
    return {
        type: ActionTypes.SetMatrixStep,
        stepNo
    };
}