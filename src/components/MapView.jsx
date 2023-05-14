import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Routing from './Routing';

import { setSubmitted } from '../store';

const MapView = () => {
  const dispatch = useDispatch();
  const { start, destination } = useSelector((state) => state);

  const position = [52.5170365, 13.3888599];

  const handleClick = () => {
    dispatch(setSubmitted());
  };
  return (
    <div>
      <div onClick={handleClick}>
        <Link to='/'>Go Home</Link>
      </div>
      <p>From City: {start}</p>
      <p>Destination City: {destination}</p>
      <MapContainer center={position} zoom={5} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Routing />
      </MapContainer>
    </div>
  );
};

export default MapView;
