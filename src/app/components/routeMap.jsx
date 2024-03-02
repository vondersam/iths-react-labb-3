'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function RouteMap({ info }) {
  // Only origin position for now
  const origin = info[0];
  const position = { lat: origin.originLat, lng: origin.originLon };
  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY || ''}>
        <Map
          center={position}
          defaultZoom={12}
          gestureHandling={'greedy'}
          style={{ width: '100%', height: '150px' }}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </>
  );
}
