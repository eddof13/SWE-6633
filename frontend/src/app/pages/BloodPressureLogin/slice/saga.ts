import { takeLatest, call, put } from 'redux-saga/effects';
import { bloodPressureLoginActions as actions } from '.';

const loginUserApi = async loginData => {
  const response = await fetch('http://localhost:8080/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  if (response.status === 200) {
    const res = await response.json();
    return res;
  }
};

function* loginUser(action) {
  try {
    const { payload } = action;
    const response = yield call(loginUserApi, payload);
    yield put(actions.loginUsername(response.username));
    yield put(actions.loginAccessToken(response.accessToken));
    yield put(actions.loginTokenType(response.tokenType));
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      yield put(
        actions.loginError(
          'Please check username/password, or register for an account and try again.',
        ),
      );
    } else {
      yield put(actions.loginError('An error occurred'));
    }
  }
}

export function* bloodPressureLoginSaga() {
  yield takeLatest(actions.loginData.type, loginUser);
}
