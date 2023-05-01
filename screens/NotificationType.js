import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import { Colors } from '../constants/ColorAndFonts';
export default function NotificationType() {
  const OptionsData = [
    {
      id: '1',
      title: 'None',
    },
    {
      id: '2',
      title: 'Near',
    },
    {
      id: '3',
      title: 'In The Distance',
    },
    {
      id: '4',
      title: 'State',
    },
    {
      id: '5',
      title: 'Country',
    },
    {
      id: '6',
      title: 'Continent',
    },
    {
      id: '7',
      title: 'All World',
    },
  ];

  const navigation = useNavigation();

  //
  const Item = ({ title }) => {
    const [active, setActive] = useState(false);

    return (
      <TouchableOpacity onPress={() => setActive(!active)} style={styles.optionsContainer}>
        <Text style={styles.options_Text}>{title}</Text>
        {active && <AntDesign name="check" size={18} color="black" />}
      </TouchableOpacity>
    );
  };
  //
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.tab_Area}>
          <View style={styles.tab_Container}>
            <View style={styles.texts_Container}>
              <Ionicons
                onPress={() => navigation.navigate('Settings')}
                name="chevron-back"
                size={30}
                color="white"
              />
              <Text style={styles.search_Text}>Search</Text>
            </View>
            <View style={styles.NotificationText_Container}>
              <Text style={styles.textType}>NotificationType</Text>
            </View>
          </View>
        </View>
        <View style={styles.options_Border}>
          <FlatList
            data={OptionsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item title={item.title} />}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary6,
  },
  textType: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  tab_Area:{
    height: 50,
    width: '100%',
    backgroundColor: Colors.primary1,
    justifyContent: 'center',
  },
  tab_Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  options_Text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  NotificationType_Text: {
    color: 'white',
    textAlign: 'center',
  },
  texts_Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search_Text: {
    color: 'white',
    fontSize: 20,
  },
  NotificationText_Container: {
    flex: 1,
    alignItems: 'center',
    marginRight: '30%',
  },
  options_Border: {
    height: '40%',
    backgroundColor: '#fff',
    with: '100%',
    marginTop: 40,
  },
});
