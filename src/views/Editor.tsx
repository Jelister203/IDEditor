import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../App";
import axios from 'axios';
import { FlatList, PermissionsAndroid, Pressable, StyleSheet, Text, TextInput, TextInputComponent } from "react-native";
import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import styles from '../ccs/Style';
import EDButton from "../components/EDButton";

type editorProps = NativeStackScreenProps<MainStackParamList, 'Editor'>;
const Editor = (props: editorProps) => {
  
const decodeFromUnicode = (str: string) => {
  return str.replace(/\\u[\dA-Fa-f]{4}/g, (match) => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g,''), 16));
  });
}
    const encodeToUnicode = (str: string) => {
        let unicodeString = '';
        for (let i = 0; i < str.length; i++) {
          let unicodeValue = str.charCodeAt(i).toString(16).toUpperCase();
          while (unicodeValue.length < 4) {
            unicodeValue = '0' + unicodeValue;
          }
          unicodeString += '\\u' + unicodeValue;
        }
        return unicodeString;
      }
    const url: string = 'http://10.0.2.2:5000/file/'+props.route.params.id
    const [inputValue, setInputValue] = useState(decodeFromUnicode(props.route.params.code.toString()));
    const handleInputChange = (text: string) => {
        setInputValue(text.toString());
      };
    //const [name, setName] = useState('');
    return (
        <ScrollContainer>
            <TextInput
                style={styles.codeInput}
                multiline={true}
                value={inputValue}
                onChangeText={handleInputChange}
            ></TextInput>
            <Pressable onPress={() => {
                // должно сохранятб.
                var patchData = async () => {
                  try {
                    const response = await axios.patch(url, {code:encodeToUnicode(inputValue).toString()});
                  }
                  catch (error) {
                }};
                patchData();
                props.route.params.upd()
            }}>
                <Text style={styles.title}>
                    Save
                </Text>
            </Pressable>
            {EDButton(handleInputChange, inputValue)}
        </ScrollContainer>
    );
};
export default Editor;
