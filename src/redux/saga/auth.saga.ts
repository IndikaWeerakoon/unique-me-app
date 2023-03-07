import { PayloadAction } from "@reduxjs/toolkit";
import { CognitoUser } from "amazon-cognito-identity-js";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { handleConfirmSignUp, handleGetCurrentSession, handleGetCurrentUser, handleLogout, handleSignIn, handleSignUp } from "../../auth/amplify.auth";
import { authAction } from "../slices/auth.slice";
import { RootState } from "../store";

function * watchLogin({payload}: PayloadAction<{phoneNumber: string}>) {
    console.log(payload)
    try {
        yield call(handleSignUp, payload.phoneNumber);
        yield call(watchSignIn, payload.phoneNumber);
    } catch(error: any) {
        if (error.code === 'UsernameExistsException') { 
            yield call(watchSignIn, payload.phoneNumber);
          } else {
            yield put(authAction.setErrorMessage({message: error.message || 'login information invalid'}))
          }
        yield put(authAction.stopLoading())
    }
}

function * watchSignIn(phoneNumber: string): any {
    try {
        const user = yield call(handleSignIn, phoneNumber);
        yield put(authAction.updateIntermedeateState({phoneNumber, user: user}));
        
    } catch (err) {
        yield put(authAction.stopLoading())
    }
}

function* watchAuthCodeSubmit({payload}: PayloadAction<{phoneNumber: string, shortCode: string}>): any {
    try {;
        const user = yield select((state: RootState) => state.auth.tempAuthUser);
        const response = yield call(handleConfirmSignUp, user, payload.shortCode);
        if(response.Session) {
            yield put(authAction.updateIntermedeateState({user: response, errorMessage: 'Invalid OTP'}));
        } else {
            yield put(authAction.authStatusUpdate({authStatus: true}));
        }
        
    } catch(error: any) {
        yield call(watchLogout);
        yield put(authAction.stopLoading());
    }
}

function* watchLogout() {
    try {
        yield call(handleLogout);
        yield put(authAction.logout())
    } catch(error) {
        yield put(authAction.stopLoading());
    }
}

const authSaga = [
    takeLatest(authAction.login, watchLogin),
    takeLatest(authAction.confirmLogin, watchAuthCodeSubmit),
    takeLatest(authAction.logoutTrigger, watchLogout)
];

export default authSaga;