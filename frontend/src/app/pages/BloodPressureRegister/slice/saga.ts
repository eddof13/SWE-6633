import { takeLatest, call, put } from 'redux-saga/effects';
import { bloodPressureRegisterActions as actions } from '.';

const registerUserApi = async registerData => {
  const response = await fetch('http://localhost:8080/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerData),
  });

  const res = await response.json();
  return res;
};

function* registerUser(action) {
  try {
    const { payload } = action;
    const response = yield call(registerUserApi, payload);
    yield put(actions.registerMessage(response.message));
  } catch (error: any) {
    yield put(actions.registerError(error.message));
  }
}

export function* bloodPressureRegisterSaga() {
  yield takeLatest(actions.registerData.type, registerUser);
}
