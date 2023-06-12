import React from 'react';
import {Create, Home, Library, Shorts, Subscription} from '../screens';
import {navigationString} from '../constants/navigationConst';
import FIcon from 'react-native-vector-icons/Foundation';
import AIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import OIcon from 'react-native-vector-icons/Octicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useColor from '../hooks/useColor';
import {RF} from '../constants/dimensions';
import {POPPINS_BOLD} from '../constants/fontsConst';
import {Pressable, useDisclose} from 'native-base';
import SheetCom from '../components/sheet/sheetCom';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const {isDark} = useColor();
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <>
      <SheetCom isOpen={isOpen} onClose={onClose} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: isDark ? '#27272a' : '#f5f5f4',
            paddingVertical: 5,
          },
          tabBarLabelStyle: {
            color: isDark ? '#fff' : '#000',
            fontSize: RF(1.1),
            fontWeight: '600',
            fontFamily: POPPINS_BOLD,
          },
        }}>
        <Tab.Screen
          component={Home}
          name={navigationString.home}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <FIcon
                  name="home"
                  color={isDark ? '#f5f5f4' : '#27272a'}
                  size={RF(3.4)}
                />
              ) : (
                <OIcon
                  name="home"
                  color={isDark ? '#f5f5f4' : '#27272a'}
                  size={RF(3.4)}
                />
              );
            },
          }}
        />

        <Tab.Screen
          component={Shorts}
          name={navigationString.shorts}
          options={{
            tabBarIcon: () => {
              return (
                <AIcon
                  name="link"
                  color={isDark ? '#f5f5f4' : '#27272a'}
                  size={RF(3.4)}
                />
              );
            },
          }}
        />

        <Tab.Screen
          component={Create}
          name={navigationString.create}
          options={{
            tabBarLabel: '',
            tabBarButton: () => {
              return (
                <Pressable onPress={onOpen}>
                  <AIcon
                    name="pluscircleo"
                    color={isDark ? '#f5f5f4' : '#27272a'}
                    size={RF(3.4)}
                  />
                </Pressable>
              );
            },
          }}
        />

        <Tab.Screen
          component={Subscription}
          name={navigationString.subscription}
          options={{
            tabBarIcon: () => {
              return (
                <IIcon
                  name="albums-outline"
                  color={isDark ? '#f5f5f4' : '#27272a'}
                  size={RF(3.4)}
                />
              );
            },
          }}
        />
        <Tab.Screen
          component={Library}
          name={navigationString.library}
          options={{
            tabBarIcon: () => {
              return (
                <IIcon
                  name="copy-outline"
                  color={isDark ? '#f5f5f4' : '#27272a'}
                  size={RF(3.4)}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
