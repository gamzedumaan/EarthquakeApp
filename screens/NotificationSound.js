import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/ColorAndFonts';

const OptionsData = [
  {
    id: '1',
    title: 'Default',
  },
  {
    id: '2',
    title: 'Silent',
  },
  {
    id: '3',
    title: 'Aurora',
  },
  {
    id: '4',
    title: 'Cool',
  },
];
export default function NotificationSound() {
  const Item = ({ title }) => {
    const [active, setActive] = useState('');
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
            <View style={styles.textType_Container}>
              <Text style={styles.textType}>Notification Sound</Text>
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
  container: {
    flex: 1,
    backgroundColor: Colors.primary6,
  },
  textType: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  tab_Area: {
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
  options_Text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  search_Text: {
    color: 'white',
    fontSize: 20,
  },
  tab_Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts_Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textType_Container: {
    flex: 1,
    alignItems: 'center',
    marginRight: '30%',
  },
  options_Container: {
    height: '24%',
    backgroundColor: '#fff',
    with: '100%',
    marginTop: 40,
  },
});
