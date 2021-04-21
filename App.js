import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <View>
          <TextInput
            placeholder=" JT Goals "
            style={{ borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 5 }}
          />
          <Button
            title="click me"
          />
        </View>
      </View>
    </View>
  );
}

