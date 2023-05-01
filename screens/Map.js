import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView, { MapMarker } from 'react-native-maps';

import { Colors } from '../constants/ColorAndFonts';

export default function Map() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.9583,
    longitude: 29.0969,
    latitudeDelta: 0.003,
    longitudeDelta: 0.02,
  });

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <SafeAreaView style={styles.container}>
        <MapView region={mapRegion} style={styles.map} />
        <MapMarker
          title="YIKES, Inc."
          description="Web Design and Development"
          coordinate={{ latitude: 39.969183, longitude: -75.133308 }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
});
