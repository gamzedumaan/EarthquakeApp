import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/ColorAndFonts';

export default function MinimumSize() {
  const OptionsData = [
    {
      id: 12,
      title: 'All Sizes',
    },
    {
      id: '1',
      title: '1.0+',
    },
    {
      id: '2',
      title: '1.5+',
    },
    {
      id: '3',
      title: '2.0+',
    },
    {
      id: '4',
      title: '2.5+',
    },
    {
      id: '5',
      title: '3.0+',
    },
    {
      id: '6',
      title: '3.5+',
    },
    {
      id: '7',
      title: '4.0+',
    },
    {
      id: '8',
      title: '4.0+',
    },
    {
      id: '9',
      title: '4.5+',
    },
    {
      id: '10',
      title: '5.0+',
    },
    {
      id: '11',
      title: '5.0+',
    },
    {
      id: '12',
      title: '5.5+',
    },
    {
      id: '13',
      title: '6.0+',
    },
    {
      id: '14',
      title: '6.5+',
    },
    {
      id: '15',
      title: '7.0+',
    },
  ];

  const Item = ({ title }) => {
    const [active, setActive] = useState(false);

    return (
      <TouchableOpacity onPress={() => setActive(!active)} style={styles.optionsContainer}>
        <Text style={styles.options_Text}>{title}</Text>
        {active && <AntDesign name="check" size={18} color="black" />}
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.tab_Area}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                onPress={() => navigation.navigate('Settings')}
                name="chevron-back"
                size={30}
                color="white"
              />
              <Text style={styles.search_Text}>Search</Text>
            </View>
            <View style={styles.minimum_text_Container}>
              <Text style={styles.minimum_Text}>Minimum Size</Text>
            </View>
          </View>
        </View>
        <View style={styles.options_Container}>
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
  minimum_Text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  tab_Area:{
    height: 50,
    width: '100%',
    backgroundColor: Colors.primary1,
    justifyContent: 'center',
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
  minimum_text_Container: {
    flex: 1,
    alignItems: 'center',
    marginRight: '30%',
  },
  search_Text: {
    color: 'white',
    fontSize: 20,
  },
  options_Text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  options_Container: {
    height: '80%',
    backgroundColor: '#fff',
    with: '100%',
    marginTop: 40,
  },
});
