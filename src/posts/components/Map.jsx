import { useMemo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const startPosition = {
  lat: 19.4326,
  lng: -99.1332
};

export const Map = () => {
  const { mapPosition } = useSelector(state => state.posts);

  const position = useMemo(() => {
    if (mapPosition) {
      return mapPosition;
    }
    return startPosition;
  }, [mapPosition]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_API_KEY',
  });

  if (!isLoaded) {
    return <div>No cargo nada</div>;
  }

  return (
    <div 
      className=''
      style={{ position: 'relative', left: '0', top: '0', height: '100%', width: '100%' }}>
      <GoogleMap
        center={position}
        zoom={16}
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '30px', }}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={position} />
      </GoogleMap>
    </div>
  );
};