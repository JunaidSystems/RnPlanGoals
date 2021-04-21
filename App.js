import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
        <TextInput
          placeholder=" JT Goals "
          style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 5 }}
        />
        <Button
          title="ADD"
        />
      </View>
      <View style={{ padding: 20, flexDirection:'row',justifyContent:'space-between' }}>
        <View
          style={{
            backgroundColor: 'orange',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'flex-start'
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: "center",
            alignSelf:'center'
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: "center",
            alignSelf:'flex-end'
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

