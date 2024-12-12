import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PlaceSearchInputs from './PlaceSearchInputs';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({
  userLocation: { fullAddress: '123 Test St' },
  nav: { origin: null, destination: null }
});

describe('PlaceSearchInputs', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <PlaceSearchInputs />
      </Provider>
    );
    expect(getByPlaceholderText('Enter pickup location')).toBeTruthy();
    expect(getByPlaceholderText('Where To?')).toBeTruthy();
  });

  it('sets origin and destination', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <PlaceSearchInputs />
      </Provider>
    );
    fireEvent.changeText(getByPlaceholderText('Enter pickup location'), 'Test Origin');
    fireEvent.changeText(getByPlaceholderText('Where To?'), 'Test Destination');
  });
});
