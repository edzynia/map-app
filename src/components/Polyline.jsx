import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Polyline = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions && positions.length > 0) {
      // Create a green icon for the start marker
      const startIcon = L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      // Create a yellow icon for the end marker
      const endIcon = L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      // Create the start marker with the green icon
      const startMarker = L.marker(positions[0], { icon: startIcon });

      // Create the end marker with the yellow icon
      const endMarker = L.marker(positions[positions.length - 1], {
        icon: endIcon,
      });

      // Create the polyline with the positions
      const polyline = L.polyline(positions);

      // Add the markers and the polyline to the map
      startMarker.addTo(map);
      endMarker.addTo(map);
      polyline.addTo(map);

      // Fit the map bounds to include both markers and the polyline
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds);
    }
  }, [map, positions]);

  return null;
};

export default Polyline;
