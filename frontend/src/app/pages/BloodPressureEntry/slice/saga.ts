import { takeLatest, call, select, put } from 'redux-saga/effects';
import { bloodPressureEntryActions as actions } from '.';
import { selectBloodPressureLogin } from 'app/pages/BloodPressureLogin/slice/selectors';

const bpEntryApi = async entryData => {
  const response = await fetch(
    'http://localhost:8080/api/blood-pressure-readings',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${entryData.loginData['tokenType']} ${entryData.loginData['accessToken']}`,
      },
      body: JSON.stringify(entryData.payload),
    },
  );

  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  if (response.status === 200) {
    const res = await response.json();
    return res;
  }
};

function* bpEntry(action) {
  try {
    const { payload } = action;
    const loginData = yield select(selectBloodPressureLogin);

    const entryData = { payload: payload, loginData: loginData };

    const response = yield call(bpEntryApi, entryData);

    yield put(actions.entryCreateDate(response.createDate));
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      yield put(actions.entryError('Please login.'));
    } else {
      yield put(actions.entryError('An error occurred'));
    }
  }
}

export function* bloodPressureEntrySaga() {
  yield takeLatest(actions.entryData.type, bpEntry);
}
