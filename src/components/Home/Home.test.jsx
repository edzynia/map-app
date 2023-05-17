import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import Home from './Home';

describe('Home component', () => {
  test('prevents form submission with empty inputs', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    const startInput = screen.getByLabelText('Start:');
    const destInput = screen.getByLabelText('Destination:');
    const submitButton = screen.getByText('See marker');

    fireEvent.change(startInput, { target: { value: '' } });
    fireEvent.change(destInput, { target: { value: '' } });
    fireEvent.click(submitButton);

    expect(store.getState().coordinates.start).toBe('');
    expect(store.getState().coordinates.destination).toBe('');
  });
});
