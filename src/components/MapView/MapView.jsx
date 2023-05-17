import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import useFetchRouteCoordinates from '../../hooks/useFetchRouteCoordinates';
import { setSubmitted } from '../../redux/actions';

import Polyline from '../Polyline/Polyline';

const apiKey = process.env.REACT_APP_API_KEY;
const MapView = () => {
  const dispatch = useDispatch();
  const { start, destination } = useSelector((state) => state.coordinates);
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
    <div data-testid='map-container'>
      <div className='text-position'>
        <button className='button' type='button' onClick={handleClick}>
          <Link to='/' style={{ color: 'white' }}>
            Go Home
          </Link>
        </button>
        <p>
          From the Point: <span className='bold'>{start}</span>
        </p>
        <p>
          To the Point: <span className='bold'>{destination}</span>
        </p>{' '}
      </div>
      <MapContainer
        data-testid='map-container'
        center={position}
        zoom={15}
        style={{ height: '100vh' }}
      >
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
