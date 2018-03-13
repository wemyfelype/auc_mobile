import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './Home'
import Comprovante from './Comprovante'

export default TabNavigator({
  Home: { screen: Home }, 
  Comprovante: { screen: Comprovante },
});