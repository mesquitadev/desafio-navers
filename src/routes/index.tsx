import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import AddNaver from '../pages/AddNaver';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#E5E5E5'},
    }}
    initialRouteName="SignUp">
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={AddNaver} />
  </Auth.Navigator>
);

export default AuthRoutes;
