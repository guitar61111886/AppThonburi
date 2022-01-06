import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Login from './screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
    <Detail/>
    {/* <Login/> */}
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#b7e3eb',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});