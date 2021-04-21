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
      <View style={{ padding: 20,height:300, flexDirection:'row-reverse',justifyContent:'center' }}>
        <View
          style={{
            backgroundColor: 'orange',
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex:2,
            justifyContent: 'center',
            alignItems: "center"
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex:1,
            justifyContent: 'center',
            alignItems: "center"
            
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

