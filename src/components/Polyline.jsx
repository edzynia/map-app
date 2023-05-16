import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const Polyline = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions && positions.length > 0) {
      const routingControl = L.Routing.control({
        waypoints: [positions[0], positions[positions.length - 1]],
        routeWhileDragging: true,
        draggableWaypoints: false,
        addWaypoints: false,
      }).addTo(map);

      return () => {
        routingControl.remove();
      };
    }
  }, [map, positions]);

  return null;
};

export default Polyline;
