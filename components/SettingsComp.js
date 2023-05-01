import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';

import { Colors, Fonts } from '../constants/ColorAndFonts';

export default function SettingsComp({ onPress, text, text2, icon, isSwitch }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <Pressable onPress={onPress}>
        <View style={{ backgroundColor: 'white', borderWidth: 0.3, borderColor: Colors.primary3 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 5,
              padding: 5,
            }}>
            <Text style={styles.text}>{text}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={styles.text2}>{text2}</Text>
              <MaterialIcons name={icon} size={24} color="#B2B2C5" />
              {isSwitch && (
                <Switch
                  trackColor={{ false: 'white', true: 'green' }}
                  thumbColor={isEnabled ? 'white' : 'white'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              )}
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: Fonts.h2,
  },
  text2: {
    fontSize: 17,
    color: Fonts.h3,
  },
});
