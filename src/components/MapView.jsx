import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import useFetchRouteCoordinates from '../hooks/useFetchRouteCoordinates';
import { setSubmitted } from '../redux/store';

import Polyline from './Polyline';

const apiKey = '5b3ce3597851110001cf6248e9430bdfd2f841f285038ec9f6176644';

const MapView = () => {
  const dispatch = useDispatch();
  const { start, destination } = useSelector((state) => state);
  const routeCoordinates = useFetchRouteCoordinates(start, destination, apiKey);

  const polylinePositions = useMemo(() => {
    if (routeCoordinates && routeCoordinates.length > 0) {
      return routeCoordinates.map((coordinate) => [
        coordinate[1],
        coordinate[0],
      ]);
    }
    return [];
  }, [routeCoordinates]);

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
        {polylinePositions.length > 0 && (
          <Polyline positions={polylinePositions} />
        )}{' '}
      </MapContainer>
    </div>
  );
};

export default MapView;
