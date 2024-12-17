import React from 'react';
import {View,Text, SafeAreaView} from 'react-native';
import Stepper from './src/Screens/Stepper';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#f1f1f1'}}>
      {/* <Text>Hello World </Text> */}
      <Stepper />
    </SafeAreaView>
  )
}

export default App