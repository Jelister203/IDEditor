import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Platform, Pressable} from 'react-native';

const EDButton = (funcToPress: Function, str: string) => {
  
const decodeFromUnicode = (str: string) => {
  return str.replace(/\\u[\dA-Fa-f]{4}/g, (match) => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g,''), 16));
  });
}
  const handleButtonPress = () => {
    const fetchData = async () => {
    var url = 'http://10.0.2.2:5000/file/1'
    try {
      const response = await axios.get(url);
      console.log(url)
      var ss: string = response.data.toString()
      var s = decodeFromUnicode(ss)
      funcToPress(str+s)
    } catch (error) {
      console.log("Error getting "+url+" more info:\n"+error)
      }
    };
    fetchData();
    
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Pressable style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Вставить</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default EDButton;