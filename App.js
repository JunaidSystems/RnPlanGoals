import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [ourGoals, setOurGoals] = useState([]);

  const goalInputHandler = (enteredTxt) => {
    setEnteredGoal(enteredTxt);
  };

  const addGoalHandler = () => {
    setOurGoals(currentGoalList => [...currentGoalList, enteredGoal]);   //these dots are used to contain all previous values in the array  
  };

  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <TextInput
          placeholder=" JT Goals "
          style={styles.txtInput1}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <View>
        {/* mapping this array in array of components */}
        {ourGoals.map((goal) => <View key={goal} style={styles.listStyle}> 
          <Text >{goal}</Text>
        </View>
        )}

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
  listStyle:{
    padding:10,
    marginVertical:10,
    borderColor:'black',
    borderWidth: 1,
    backgroundColor: '#33FFAC'
  }
});
