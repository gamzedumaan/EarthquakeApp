import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { Colors } from '../constants/ColorAndFonts';

export default function PickerCompTwo({ onPress1, onPress2, text, text2 }) {
  return (
    <>
      <View style={styles.menu}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Pressable onPress={onPress1}>
            <Text style={styles.allRegions}>{text}</Text>
          </Pressable>
          <Pressable onPress={onPress2}>
            <Text style={styles.allRegions}>{text2}</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: 40,
    width: '100%',
    backgroundColor: Colors.primary4,
  },
  allRegions: {
    fontSize: 18,
    color: Colors.primary2,
    textAlign: 'center',
    top: 8,
  },
});
