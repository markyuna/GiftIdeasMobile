
import React from 'react';

// import { StatusBar } from 'expo-status-bar';
import { TextInput, Image, StyleSheet, Text, View } from 'react-native';
import Gifts from './src/gifts.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Christmas gift generator</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://res.cloudinary.com/dxrttyi2g/image/upload/v1691262058/ADB_4_F4_A8_794_D_483_E_9631_5_DAB_3_D6159_DD_8cc46e3c46.png',
        }}
      />
      <Gifts />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: -105,
    fontSize : 30,
  },

});
