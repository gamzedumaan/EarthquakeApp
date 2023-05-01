import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';

import PickerComp from '../components/PickerComp';
import { Colors, Fonts } from '../constants/ColorAndFonts';

export default function Search() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedsize, setSelectedSize] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleone, setModalVisibleOne] = useState(false);

  const [date, setDate] = useState(new Date());
  console.log({ date });
  const [open, setOpen] = useState(false);

  const [stardates, setStartDates] = useState(false);
  const [enddate, setEndDate] = useState(false);

  function StartDates() {
    !stardates;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.tab_Container}>
          <View style={styles.button_Container}>
            <PickerComp onPress={() => setModalVisible(!modalVisible)} title="All Regions" />
            <PickerComp title="All Sizes" onPress={() => setModalVisibleOne(!modalVisibleone)} />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Close');
            setModalVisible(!modalVisibleone);
          }}>
          <View style={styles.picker_Container}>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.close_Text}>Close</Text>
              </TouchableOpacity>
              <Text style={styles.menu_Text}>Regions</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.done_Text}>Done</Text>
              </TouchableOpacity>
            </View>
            <Picker
              style={styles.picker}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
              <Picker.Item label="South America" value="java" />
              <Picker.Item label="North america" value="js" />
              <Picker.Item label="Europe" value="java" />
              <Picker.Item label=" Okyanusya" value="js" />
              <Picker.Item label="Asya america" value="js" />
              <Picker.Item label="Africa " value="js" />
            </Picker>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisibleone}
          onRequestClose={() => {
            Alert.alert('Close');
            setModalVisibleOne(!modalVisibleone);
          }}>
          <View style={styles.picker_ContainerTwo}>
            <View style={styles.buttons2}>
              <TouchableOpacity onPress={() => setModalVisibleOne(false)}>
                <Text style={styles.close_Text}>Close</Text>
              </TouchableOpacity>
              <Text style={styles.menu_Text}>Magnitude</Text>
              <TouchableOpacity onPress={() => setModalVisibleOne(false)}>
                <Text style={styles.done_Text}>Done</Text>
              </TouchableOpacity>
            </View>
            <Picker
              style={styles.picker2}
              selectedValue={selectedsize}
              onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}>
              <Picker.Item label="All Magnitude" value="java" />
              <Picker.Item label="1.0+ Magnitude" value="java" />
              <Picker.Item label="2.0+ Magnitude" value="java" />
              <Picker.Item label="3.0+ Magnitude" value="java" />
              <Picker.Item label="4.0+ Magnitude" value="java" />
              <Picker.Item label="5.0+ Magnitude" value="java" />
              <Picker.Item label="6.0+ Magnitude" value="java" />
              <Picker.Item label="7.0+ Magnitude" value="java" />
            </Picker>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  tab_Container: {
    height: 110,
    width: '100%',
    backgroundColor: Colors.primary1,
  },
  button_Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  picker_Container: {
    width: '100%',
    height: '40%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.primary2,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  picker2: {
    height: 50,
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    margin: 5,
  },
  close_Text: {
    color: Fonts.h4,
    fontSize: 19,
    fontWeight: '600',
  },
  done_Text: {
    color: Fonts.h4,
    fontSize: 19,
    fontWeight: '600',
  },
  menu_Text: {
    fontSize: 19,
    fontWeight: '600',
  },
  picker_ContainerTwo: {
    width: '100%',
    height: '40%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.primary2,
  },
  buttons2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    margin: 5,
  },
});
