import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import SettingsComp from '../components/SettingsComp';
import TabIcon from '../components/TabIcon';
import TextComp from '../components/TextComp';
import { Colors, Fonts } from '../constants/ColorAndFonts';

export default function Settings() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary1 }} />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.tab_Area}>
          <View style={styles.icon_Container}>
            <View style={{ flex: 1, alignItems: 'center', marginLeft: '25%' }}>
              <TabIcon />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>Remove The Ad</Text>
            </View>
          </View>
        </View>
        <SafeAreaView style={styles.container}>
          <View style={{ marginTop: 20, marginBottom: 5 }}>
            <Text style={styles.natification_Text}>NATİFİCATİON</Text>
          </View>
          <SettingsComp
            text="Notification Type"
            text2="All World"
            icon="navigate-next"
            isSwitch={false}
            onPress={() => navigation.navigate('NotificationType')}
          />
          <SettingsComp
            text="Minimum Size"
            text2="5.0+ "
            icon="navigate-next"
            onPress={() => navigation.navigate('MinimumSize')}
          />
          <SettingsComp
            text="Notification Sound"
            text2="Default"
            icon="navigate-next"
            onPress={() => navigation.navigate('NotificationSound')}
          />
          <View>
            <Text style={styles.texts1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
            <Text style={styles.texts2}>Area</Text>
          </View>
          <SettingsComp text="Continent" icon="navigate-next" />
          <SettingsComp text="Country" text2="Near" icon="navigate-next" />
          <SettingsComp text="Unit of Distance" text2="Near" icon="navigate-next" />
          <View>
            <Text style={styles.texts3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <Text style={styles.texts4}>Maps</Text>
          </View>
          <SettingsComp text="Map Type" icon="navigate-next" />
          <SettingsComp text="Should the fault lines be shown ?" isSwitch />
          <View>
            <Text style={styles.texts5}>Soon</Text>
          </View>
          <SettingsComp text="Show The Sizes" text2="All Sizes" icon="navigate-next" />
          <SettingsComp text="Show The Area" text2="All Area" icon="navigate-next" />
          <SettingsComp text="Time" text2="Near" icon="navigate-next" />
          <SettingsComp text="Should it be displayed in Utc time ?" isSwitch={true} />
          <SettingsComp text="Unit of Distance" isSwitch={true} />
          <View>
            <Text style={styles.texts6}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
            <Text style={styles.texts7}>Other</Text>
          </View>
          <View>
            <TextComp text="Privacy Policy" />
            <TextComp text="Give points to the Application" />
            <TextComp text="Share The Application" />
            <TextComp text="Frequently Asked Questions" />
            <TextComp text="Privacy Policy" />
            <TextComp text="Contact Support" />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary6,
  },
  tab_Area: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.primary1,
    justifyContent: 'center',
  },
  icon_Container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  natification_Text: {
    fontSize: 17,
    margin: 5,
    padding: 5,
    color: '#454545',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  texts1: {
    color: Fonts.h3,
    letterSpacing: 2,
    marginTop: 10,
    margin: 10,
  },
  texts2: {
    color: Fonts.h3,
    letterSpacing: 2,
    marginTop: 20,
    margin: 5,
  },
  texts3: {
    color: Fonts.h3,
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 10,
  },
  texts4: {
    color: Fonts.h3,
    letterSpacing: 2,
    marginTop: 20,
    margin: 5,
  },
  texts5: {
    color: Fonts.h3,
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  texts6: {
    color: '#454545',
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  texts7: {
    color: Fonts.h3,
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
});
