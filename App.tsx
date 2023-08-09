/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './screens/homepage';
import Octicons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './screens/profile';
import Search from './screens/search';
import Reels from './screens/reels';
import Like from './screens/like';

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? (
                  <Entypo name="home" size={size} color={color} />
                ) : (
                  <Octicons name="home" size={size} color={color} />
                );
              } else if (route.name === 'Search') {
                iconName = focused ? (
                  <Ionicons name="search" size={size} color={color} />
                ) : (
                  <Ionicons name="search-outline" size={size} color={color} />
                );
              } else if (route.name === 'Reels') {
                iconName = focused ? (
                  <MaterialCommunityIcons
                    name="movie-open-play"
                    size={size}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="movie-open-play-outline"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Like') {
                iconName = focused ? (
                  <Ionicons name="heart" size={size} color={color} />
                ) : (
                  <Ionicons name="heart-outline" size={size} color={color} />
                );
              } else if (route.name === 'Profile') {
                iconName = focused ? (
                  <Ionicons
                    name="person-circle-sharp"
                    size={size}
                    color={color}
                  />
                ) : (
                  <Ionicons
                    name="person-circle-outline"
                    size={size}
                    color={color}
                  />
                );
              }

              // You can return any component that you like here!\
              // @ts-ignore
              return iconName;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Reels" component={Reels} />
          <Tab.Screen name="Like" component={Like} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
