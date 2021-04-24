import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <TextInput
          placeholder=" JT Goals "
          style={styles.txtInput1}
        />
        <Button
          title="ADD"
        />
      </View>
      <View style={styles.lowerContainer}>
        <View
          style={[styles.box1Style,styles.boxStyle]}
        >
          <Text>1</Text>
        </View>
        <View
          style={[styles.box2Style,styles.boxStyle]}
        >
          <Text>2</Text>
        </View>
        <View
          style={[styles.box3Style,styles.boxStyle]}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  txtInput1: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  lowerContainer: {
    padding: 20,
    height: 300,
    flexDirection: 'row-reverse',
    justifyContent: 'center'
  },
  boxStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1Style:{
    backgroundColor: 'orange'
  },
  box2Style:{
    backgroundColor: 'yellow'
  },
  box3Style:{
    backgroundColor: 'green'
  }
  
});
