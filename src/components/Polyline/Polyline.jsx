import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Polyline = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions && positions.length > 0 && map) {
      const startIcon = L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const endIcon = L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const startMarker = L.marker(positions[0], { icon: startIcon });
      const endMarker = L.marker(positions[positions.length - 1], {
        icon: endIcon,
      });

      const polyline = L.polyline(positions);
      const layerGroup = L.layerGroup([startMarker, endMarker, polyline]);

      if (map && startMarker && endMarker && layerGroup) {
        layerGroup.addTo(map);

        const bounds = L.latLngBounds(positions);
        map.fitBounds(bounds);
      }
    }
  }, [map, positions]);

  return null;
};

export default Polyline;
