import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';


import Users from '../Screens/users';

import UserDetails from '../Screens/userDetails';
const stack=createNativeStackNavigator();
const Root = () => {
    return (
        <stack.Navigator>
       

       <stack.Screen name={"users"} component={Users}></stack.Screen>
<stack.Screen name={"details"} component={UserDetails}></stack.Screen>

       
       </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;
