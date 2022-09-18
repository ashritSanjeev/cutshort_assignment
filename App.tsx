import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base'

import { appStyles } from './appStyles';
import PageRoutes from './src/pageRoutes';

const {container} = appStyles;

const App = () => {
return (
    <View style={container}>
      <NativeBaseProvider>
        <StatusBar translucent/>
        <PageRoutes/>
      </NativeBaseProvider>
    </View>
  )
}

export default App;
