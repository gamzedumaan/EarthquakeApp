import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Fonts, Colors } from '../constants/ColorAndFonts';

export default function TextComp({ text }) {
  return (
    <>
      <Pressable
        style={{
          width: '100%',
          backgroundColor: 'white',
          borderWidth: 0.3,
          borderColor: Colors.primary3,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: Fonts.h2,
            fontSize: 17,
            margin: 5,
            padding: 5,
          }}>
          {text}
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({});
