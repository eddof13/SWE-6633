import { takeLatest, call, select, put } from 'redux-saga/effects';
import { bloodPressureChartActions as actions } from '.';
import { selectBloodPressureLogin } from 'app/pages/BloodPressureLogin/slice/selectors';

const displayChartApi = async (accessToken: string) => {
  const response = await fetch(
    'http://localhost:8080/api/blood-pressure-readings',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  console.log('***response:', response);

  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  if (response.status === 200) {
    const res = await response.json();
    return res;
  }
};

function* displayChart(action) {
  try {
    const loginData = yield select(selectBloodPressureLogin);

    const { accessToken } = loginData;

    const response = yield call(displayChartApi, accessToken);

    yield put(actions.bpDataList(response));
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      yield put(
        actions.bpDataError(
          'Please check username/password, or register for an account and try again.',
        ),
      );
    } else {
      yield put(actions.bpDataError('An error occurred'));
    }
  }
}

export function* bloodPressureChartSaga() {
  yield takeLatest(actions.bpData.type, displayChart);
}
