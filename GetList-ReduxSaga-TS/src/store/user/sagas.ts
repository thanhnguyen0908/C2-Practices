import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUserFailure, fetchUserSuccess } from "./actions";
import { FETCH_USER_REQUEST } from "./actionTypes";
import { IUser } from "./types";

const getUsers = () =>
  axios.get<IUser[]>("https://60d97a47eec56d0017477806.mockapi.io/user");

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* fetchUserSaga() {
  try {
    const response = yield call(getUsers);
    yield put(
      fetchUserSuccess({
        users: response.data,
      })
      );
      console.log('User fetched succesfully')
  } catch (e) {
    yield put(
      fetchUserFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* userSaga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;