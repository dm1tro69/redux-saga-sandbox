import {call, put, take} from "redux-saga/effects";
import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "./actions";
import * as userApi from '../api/user'


function* authorize(username, password) {
    try {
      const token = yield call(userApi.login, username, password)
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                token
            }
        })
        return token
    }catch (e) {
        yield put({
            type: LOGIN_ERROR,
            payload: {e}
        })
    }
}

export function* loginFlowSaga() {

    while (true) {
        const {payload} = yield take(LOGIN_REQUEST)
        const token = yield call(authorize, payload.username, payload.password)
        if (token){
            yield call(userApi.saveToken, token)
            yield take(LOGOUT)
            yield call(userApi.clearToken)
        }
    }
}