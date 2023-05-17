import { useRoutes } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import MapView from '../MapView/MapView';

const App = () => {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/map', element: <MapView /> },
  ]);

  return element;
};
export default App;
