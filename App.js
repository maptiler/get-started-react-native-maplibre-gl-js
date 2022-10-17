import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapLibreGL from '@rnmapbox/maps';

export default function App() {
  MapLibreGL.setWellKnownTileServer(MapLibreGL.TileServers.MapLibre);
  MapLibreGL.setAccessToken(null);

  const MAPTILER_API_KEY = "YOUR_MAPTILER_API_KEY_HERE";

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapLibreGL.MapView
          style={styles.map}
          styleURL={`https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_API_KEY}`}
          logoEnabled={false}
          attributionPosition={{bottom: 8, right: 8}}>
          <MapLibreGL.Camera
            defaultSettings={{centerCoordinate: [2, 41.5], zoomLevel: 8}}
          />
        </MapLibreGL.MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
  image: {
    width: 25,
    height: 25,
  },
});
