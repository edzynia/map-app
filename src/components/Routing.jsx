import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

import useCityCoordinates from '../hooks/useCityCoordinates';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

const Routing = () => {
  const { start, destination } = useSelector((state) => state);
  const map = useMap();

  const startCoordinates = useCityCoordinates(start);
  const destinCoordinates = useCityCoordinates(destination);

  const { latitude: startLat, longitude: startLong } = startCoordinates;
  const { latitude: destinLat, longitude: destinLong } = destinCoordinates;

  useEffect(() => {
    if (!map) return;
    if (!startCoordinates && !destinCoordinates) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startLat, startLong),
        L.latLng(destinLat, destinLong),
      ],
      lineOptions: {
        styles: [
          {
            color: 'blue',
            opacity: 0.6,
            weight: 4,
          },
        ],
      },
      show: true,
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [
    map,
    startLat,
    startLong,
    destinLat,
    destinLong,
    startCoordinates,
    destinCoordinates,
  ]);

  return null;
};

export default Routing;
