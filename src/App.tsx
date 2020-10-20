import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#E5E5E5" />
    <AppProvider>
      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
