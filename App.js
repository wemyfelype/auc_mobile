import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator} from 'react-navigation';

import LoginScreen from './src/containers/Login';
import TabsScreen from './src/components/tabs/Base'


export default DrawerNav = DrawerNavigator(
  {
    Login: {
      path: '/',
      screen: LoginScreen,
    },
    Tabs: {
      path: '/Tab',
      screen: TabsScreen,
    },
  },
  {
    initialRouteName: 'Login',
    drawerPosition: 'left'
  }
)

