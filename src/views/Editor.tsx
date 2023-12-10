import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../App";
import axios from 'axios';
import { FlatList, PermissionsAndroid, Pressable, StyleSheet, Text, TextInput } from "react-native";
import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import styles from '../ccs/Style';

type editorProps = NativeStackScreenProps<MainStackParamList, 'Editor'>;
const Editor = (props: editorProps) => {

    //const [name, setName] = useState('');
    return (
        <ScrollContainer>
            <TextInput>
                {props.route.params.code}
            </TextInput>
            <Pressable onPress={() => 
                {}}>
                <Text style={styles.title}>
                    Save
                </Text>
            </Pressable>
        </ScrollContainer>
    );
};
export default Editor;
