import { render } from '@testing-library/react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import Polyline from './Polyline';

jest.mock('react-leaflet', () => ({
  ...jest.requireActual('react-leaflet'),
  useMap: jest.fn(),
}));

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  icon: jest.fn(),
  marker: jest.fn(),
  polyline: jest.fn(),
  layerGroup: jest.fn(),
  latLngBounds: jest.fn(),
}));

describe('Polyline component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders and adds markers and polyline to the map', () => {
    const positions = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];

    const mockMap = { fitBounds: jest.fn(), addTo: jest.fn() };
    useMap.mockReturnValue(mockMap);

    const mockStartIcon = {};
    const mockEndIcon = {};
    const mockStartMarker = {};
    const mockEndMarker = {};
    const mockPolyline = {};
    const mockLayerGroup = { addTo: jest.fn() };

    L.icon.mockReturnValueOnce(mockStartIcon).mockReturnValueOnce(mockEndIcon);
    L.marker
      .mockReturnValueOnce(mockStartMarker)
      .mockReturnValueOnce(mockEndMarker);
    L.polyline.mockReturnValue(mockPolyline);
    L.layerGroup.mockReturnValue(mockLayerGroup);

    render(<Polyline positions={positions} />);

    expect(useMap).toHaveBeenCalled();
    expect(L.icon).toHaveBeenCalledTimes(2);
    expect(L.marker).toHaveBeenCalledTimes(2);
    expect(L.polyline).toHaveBeenCalledWith(positions);
    expect(L.layerGroup).toHaveBeenCalledWith([
      mockStartMarker,
      mockEndMarker,
      mockPolyline,
    ]);
    expect(mockLayerGroup.addTo).toHaveBeenCalledWith(mockMap);
    expect(L.latLngBounds).toHaveBeenCalledWith(positions);
    expect(mockMap.fitBounds).toHaveBeenCalled();
  });
});
