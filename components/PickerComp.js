import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/ColorAndFonts';

export default function PickerComp({ onPress, title }) {
  return (
    <>
      <TouchableOpacity style={styles.menu} onPress={onPress}>
        <Text style={styles.allRegions}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: 30,
    width: '30%',
    backgroundColor: Colors.primary4,
    borderRadius: 5,
  },
  allRegions: {
    fontSize: 18,
    color: Colors.primary2,
    textAlign: 'center',
    top: 4,
  },
});
