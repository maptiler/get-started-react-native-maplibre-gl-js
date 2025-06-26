import { StyleSheet, View } from 'react-native';

import { MapView, Camera } from "@maplibre/maplibre-react-native";

export default function App() {

  const MAPTILER_API_KEY = "YOUR_MAPTILER_API_KEY_HERE";

  return (
    <View style={styles.container}>
      <View style={styles.mapcontainer}>
        <MapView 
          style={styles.map} 
          mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_API_KEY}`}
          logoEnabled={false}
          attributionPosition={{bottom: 8, right: 8}}>
            <Camera
              centerCoordinate={[2, 41.5]}
              zoomLevel={8}
              animationDuration={2000}
              animationMode="easeTo"
            />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapcontainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});
