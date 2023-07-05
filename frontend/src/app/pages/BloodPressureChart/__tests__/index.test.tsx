import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { BloodPressureChart } from '..';

afterEach(cleanup);

const mockStore = configureStore([]);

describe('<BloodPressureChart />', () => {
  it('renders and matches the snapshot', () => {
    const store = mockStore({
      bloodPressureChart: {
        data: [
          {
            id: 1,
            createDate: '2023-07-04T23:36:40.844+00:00',
            modifyDate: '2023-07-04T23:36:40.844+00:00',
            systolic: 120.0,
            diastolic: 80.0,
            userName: 'tester',
          },
          {
            id: 2,
            createDate: '2023-07-04T23:58:53.674+00:00',
            modifyDate: '2023-07-04T23:58:53.674+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 3,
            createDate: '2023-07-05T00:01:16.542+00:00',
            modifyDate: '2023-07-05T00:01:16.542+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 4,
            createDate: '2023-07-05T00:02:23.744+00:00',
            modifyDate: '2023-07-05T00:02:23.744+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 5,
            createDate: '2023-07-05T00:02:28.414+00:00',
            modifyDate: '2023-07-05T00:02:28.414+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 6,
            createDate: '2023-07-05T00:11:21.379+00:00',
            modifyDate: '2023-07-05T00:11:21.379+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 7,
            createDate: '2023-07-05T00:11:45.249+00:00',
            modifyDate: '2023-07-05T00:11:45.249+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 8,
            createDate: '2023-07-05T00:19:17.573+00:00',
            modifyDate: '2023-07-05T00:19:17.573+00:00',
            systolic: 123.0,
            diastolic: 123.0,
            userName: 'tester',
          },
          {
            id: 9,
            createDate: '2023-07-05T01:43:50.740+00:00',
            modifyDate: '2023-07-05T01:43:50.747+00:00',
            systolic: 120.0,
            diastolic: 80.0,
            userName: 'tester',
          },
          {
            id: 10,
            createDate: '2023-07-05T02:12:40.628+00:00',
            modifyDate: '2023-07-05T02:12:40.628+00:00',
            systolic: 300.0,
            diastolic: 100.0,
            userName: 'tester',
          },
          {
            id: 11,
            createDate: '2023-07-05T02:20:19.841+00:00',
            modifyDate: '2023-07-05T02:20:19.841+00:00',
            systolic: 250.0,
            diastolic: 100.0,
            userName: 'tester',
          },
          {
            id: 12,
            createDate: '2023-07-05T02:20:39.013+00:00',
            modifyDate: '2023-07-05T02:20:39.013+00:00',
            systolic: 180.0,
            diastolic: 80.0,
            userName: 'tester',
          },
          {
            id: 13,
            createDate: '2023-07-05T02:20:47.356+00:00',
            modifyDate: '2023-07-05T02:20:47.356+00:00',
            systolic: 120.0,
            diastolic: 80.0,
            userName: 'tester',
          },
          {
            id: 14,
            createDate: '2023-07-05T02:26:07.103+00:00',
            modifyDate: '2023-07-05T02:26:07.103+00:00',
            systolic: 110.0,
            diastolic: 70.0,
            userName: 'tester',
          },
          {
            id: 15,
            createDate: '2023-07-05T02:26:26.592+00:00',
            modifyDate: '2023-07-05T02:26:26.592+00:00',
            systolic: 100.0,
            diastolic: 40.0,
            userName: 'tester',
          },
          {
            id: 16,
            createDate: '2023-07-05T02:26:35.667+00:00',
            modifyDate: '2023-07-05T02:26:35.667+00:00',
            systolic: 150.0,
            diastolic: 90.0,
            userName: 'tester',
          },
        ],
        error: '',
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <BloodPressureChart />
        </MemoryRouter>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
