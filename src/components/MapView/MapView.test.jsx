import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MapView from './MapView';
import { store } from '../../redux/store';

jest.mock('../../helpers/fetchData', () => ({
  getCityCoordinates: jest.fn(),
}));

describe('MapView component', () => {
  test('renders map container', async () => {
    await render(
      <Provider store={store}>
        <BrowserRouter>
          <MapView />
        </BrowserRouter>
      </Provider>,
    );
    const mapContainer = screen.getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();
  });

  test('displays start and destination points', async () => {
    await render(
      <Provider store={store}>
        <BrowserRouter>
          <MapView />
        </BrowserRouter>
      </Provider>,
    );
    const startElement = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'p' &&
        content.includes('From the Point:')
      );
    });

    const destinationElement = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'p' &&
        content.includes('To the Point:')
      );
    });
    expect(startElement).toBeInTheDocument();
    expect(destinationElement).toBeInTheDocument();
  });

  test('navigates back to home page when "Go Home" button is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MapView />
        </BrowserRouter>
      </Provider>,
    );
    const goHomeButton = screen.getByText('Go Home');
    fireEvent.click(goHomeButton);
    const homeLink = screen.getByText('Go Home');
    expect(homeLink).toBeInTheDocument();
  });
});
