import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native';
import MapView from 'react-native-maps';

import { Colors, Fonts } from '../constants/ColorAndFonts';

export default function Soon() {
  const navigation = useNavigation();
  const [earthquake, setEarthquake] = useState([]);
  useEffect(() => {
    earthquakeData();
  }, []);
  const earthquakeData = async () => {
    const data = await axios.get('https://api.berkealp.net/kandilli/index.php?all');
    setEarthquake(data.data);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <SafeAreaView style={styles.container}>
        <MapView style={styles.map} />
        <View>
          <FlatList
            data={earthquake}
            keyExtractor={(item) => item.id} 
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Detail', {
                      Magnitude: item.Magnitude,
                      LastUpdate: item.LastUpdate,
                      Region: item.Region,
                      Time: item.Time,
                      Latitude: item.Latitude,
                      Longitude: item.Longitude,
                      MagnitudeType: item.MagnitudeType,
                    })
                  }>
                  <View style={styles.data_Container}>
                    <View style={styles.text_Container}>
                      <Text style={styles.region_Text}>{item.Region}</Text>
                      <Text style={styles.lastUpdate_Text}>{item.LastUpdate}</Text>
                    </View>
                    <View style={styles.text_Container}>
                      <Text style={styles.longitude_Text}>{item.Longitude}</Text>
                      <Text style={styles.latitude_Text}>{item.Latitude}</Text>
                    </View>
                    <View style={styles.text_Container}>
                      <Text style={styles.time_Text}>{item.Time}</Text>
                      <View
                        style={{
                          height: 25,
                          width: 25,
                          backgroundColor: Colors.primary1,
                          borderRadius: 50,
                        }}>
                        <Text style={styles.magnitude_Text}>{item.Magnitude}</Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  map: {
    width: '100%',
    height: '50%',
  },

  data_Container: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primary3,
    margin: 5,
    padding: 5,
    marginTop: 15,
    Bottom: 10,
  },
  region_Text: {
    color: Fonts.h2,
    fontSize: 16,
    fontWeight: '600',
  },
  lastUpdate_Text: {
    color: Fonts.h3,
    fontSize: 16,
  },
  longitude_Text: {
    color: Fonts.h3,
    fontSize: 16,
  },
  latitude_Text: {
    color: Fonts.h3,
    fontSize: 16,
  },
  time_Text: {
    color: Fonts.h2,
    fontSize: 16,
  },

  magnitude_Text: {
    color: Colors.primary2,
    textAlign: 'center',
    top: 4,
  },
  text_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
