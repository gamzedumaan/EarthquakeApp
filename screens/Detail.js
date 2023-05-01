import {
  Fontisto,
  AntDesign,
  MaterialIcons,
  Ionicons,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

import TabIcon from '../components/TabIcon';
import { Colors, Fonts } from '../constants/ColorAndFonts';

export default function Detail() {
  const route = useRoute();
  const lat = route.params.Latitude.replace('&deg; N', '');
  const lng = route.params.Longitude.replace('&deg; E', '');
  console.log(route.params.Longitude);
  console.log(lat);
  console.log(lng);
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.tab_Area}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                onPress={() => navigation.goBack('Soon')}
                name="chevron-back"
                size={30}
                color="white"
              />
              <Text style={styles.text3}>Soon</Text>
            </View>
            <View style={styles.tabIcon_Container}>
              <TabIcon />
            </View>
            <View style={styles.icons_Container}>
              <Entypo style={{ right: 20 }} name="share-alternative" size={24} color="white" />
              <FontAwesome
                onPress={() => navigation.navigate('Map')}
                style={{ right: 5 }}
                name="map-o"
                size={24}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={styles.tab_Container}>
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Text style={styles.region_Text}>{route.params.Region}</Text>
            <Text style={styles.magnitudeType_Text}>{route.params.MagnitudeType}</Text>
          </View>
        </View>
        <MapView
          initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          style={styles.map}
        />
        <View style={styles.detail_Container}>
          <View style={{ height: 50, width: 50, backgroundColor: Fonts.h5, borderRadius: 50 }}>
            <Text style={styles.magnitude_Text}>{route.params.Magnitude}</Text>
          </View>
          <View style={styles.text_Container}>
            <Text style={styles.text2}>Duration of the earthquake</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>It was felt only by vulnerable people.</Text>
              <View style={{ marginLeft: 50 }}>
                <Lottie
                  autoPlay
                  speed={2}
                  source={require('../assets/pulse-loader.json')}
                  width={30}
                  height={30}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottom_Container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign style={{ right: 15 }} name="clockcircleo" size={24} color="#7F8487" />
              <Text style={styles.Longitude_Text}>{route.params.Longitude}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Fontisto style={{ right: 15 }} name="world-o" size={24} color="#7F8487" />
              <Text style={styles.LastUpdate_Text}>{route.params.LastUpdate}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons style={{ right: 15 }} name="north-west" size={24} color="#7F8487" />
              <Text style={styles.time_Text}>{route.params.Time}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons
                style={{ marginRight: 20 }}
                name="apartment"
                size={24}
                color="#7F8487"
              />
              <Text style={styles.Latitude_Text}>{route.params.Latitude}</Text>
            </View>
          </View>
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
  tab_Area: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.primary1,
    justifyContent: 'center',
  },
  tab_Container: {
    width: '100%',
    height: '15%',
    backgroundColor: Colors.primary1,
  },
  tabIcon_Container: {
    flex: 1,
    alignItems: 'center',
  },
  icons_Container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    right: 10,
  },
  region_Text: {
    color: Fonts.h1,
    fontSize: 20,
  },
  magnitudeType_Text: {
    color: Fonts.h1,
    fontSize: 16,
    fontWeight: '200',
  },
  map: {
    height: '50%',
    width: '100%',
  },
  detail_Container: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    marginTop: 20,
    left: 20,
  },
  text_Container: {
    alignItems: 'center',
    left: 20,
    top: 10,
  },
  magnitude_Text: {
    color: Fonts.h1,
    fontSize: 25,
    textAlign: 'center',
    top: 10,
    fontWeight: '600',
  },
  Longitude_Text: {
    color: Fonts.h6,
    fontSize: 16,
  },
  LastUpdate_Text: {
    color: Fonts.h6,
    fontSize: 16,
  },
  time_Text: {
    color: Fonts.h6,
    fontSize: 16,
  },
  Latitude_Text: {
    
    color: Fonts.h6,
    fontSize: 16,
  },
  text: {
    color: Fonts.h3,
    fontSize: 15,
    fontWeight: '200',
  },
  text2: {
    fontWeight: '500',
    fontSize: 15,
    right: 50,
  },
  text3: {
    color: 'white',
    fontSize: 20,
  },
  bottom_Container: {
    flex: 1,
    backgroundColor: Colors.primary3,
  },
});
