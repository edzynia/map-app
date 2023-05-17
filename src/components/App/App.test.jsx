import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import App from '../App';

describe('App', () => {
  test('renders Home component for path "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText('Maps Application')).toBeInTheDocument();
  });

  test('renders MapView component for path "/map"', () => {
    render(
      <MemoryRouter initialEntries={['/map']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });
});
