import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { Colors, Fonts } from './constants/ColorAndFonts';
import Detail from './screens/Detail';
import Map from './screens/Map';
import MinimumSize from './screens/MinimumSize';
import NotificationSound from './screens/NotificationSound';
import NotificationType from './screens/NotificationType';
import Search from './screens/Search';
import Settings from './screens/Settings';
import Soon from './screens/Soon';

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Screens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Soon" component={Soon} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="NotificationType" component={NotificationType} />
      <Stack.Screen name="MinimumSize" component={MinimumSize} />
      <Stack.Screen name="NotificationSound" component={NotificationSound} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.primary1,
          },
          headerStyle: { backgroundColor: Colors.primary1 },
          headerShown: false,
        }}>
        <Bottom.Screen
          name="Soon"
          component={Screens}
          options={{
            tabBarLabelStyle: { color: Fonts.h1, fontSize: 13 },
            tabBarIcon: ({ color, focused }) => (
              <Fontisto name="world" size={28} color={focused ? '#F0F0F0' : color} />
            ),
          }}
        />
        <Bottom.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabelStyle: { color: Fonts.h1, fontSize: 13 },
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="search1" size={27} color={focused ? '#F0F0F0' : color} />
            ),
          }}
        />
        <Bottom.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabelStyle: { color: Fonts.h1, fontSize: 13 },
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="settings" size={27} color={focused ? '#F0F0F0' : color} />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
