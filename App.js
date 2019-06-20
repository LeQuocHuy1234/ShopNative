/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/component/HomeScreen';
import DetailProductScreen from './src/component/Product/DetailProductScreen';
import CartScreen from './src/component/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PaymentScreen from './src/component/Cart/PaymentScreen';

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  ProductDetail: {
    screen: DetailProductScreen
  },
  CartStack: {
    screen: CartScreen
  },
  Payment: {
    screen: PaymentScreen
  }
});

const StackCart = createStackNavigator({
  Cart: {
    screen: CartScreen
  },
})

const TabNavigator = createBottomTabNavigator({
  StackNavigation: {
    screen: StackNavigator,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({focused, tintColor}) => {
        return <Ionicons name='ios-home' size={25} color={ tintColor } />
      }
    }
  },
  Cart: {
    screen: StackCart,
    navigationOptions: {
      title: 'Giỏ hàng',
      tabBarIcon: ({focused, tintColor}) => {
        return <Ionicons name='ios-cart' size={25} color={ tintColor } />
      }
    }
  }
});

export default createAppContainer(TabNavigator);