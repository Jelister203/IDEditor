import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../App";
import axios from 'axios';
import { FlatList, PermissionsAndroid, Pressable, StyleSheet, Text, TextInput } from "react-native";
import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";

type editorProps = NativeStackScreenProps<MainStackParamList, 'Editor'>;
const Editor = (props: editorProps) => {

    //const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://10.0.2.2:5000/browse');
            setNames(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <ScrollContainer>
            <Text style={styles.label}>{names}</Text>
            <Pressable onPress={() => {}}>
                <Text style={styles.title}>
                    Save?
                </Text>
            </Pressable>
        </ScrollContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        marginLeft: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 16,
        marginLeft: 15,
    },
    back: {
        fontSize: 20,
        marginBottom: 16,
        marginTop: 10,
    },
});

export default Editor;

// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { MainStackParamList } from "../../App";
// import { FlatList, PermissionsAndroid, Pressable, StyleSheet, Text, TextInput } from "react-native";
// import ScrollContainer from "../containers/ScrollContainer";
// import React, { useEffect, useState } from "react";
// import RNFS, { ReadDirItem } from 'react-native-fs';

// type editorProps = NativeStackScreenProps<MainStackParamList, 'Editor'>;
// const Editor = (props: editorProps) => {
//     const packagename = "MyIDE"
//     const directoryPath = '/storage/emulated/0/Android/media/'+packagename+'/MyIDE/newFolder';
//     const filePath = directoryPath+"/file.txt"
//     const [directoryContents, setDirectoryContents] = useState<ReadDirItem[]>([]);
    
//     const makeFile = async (filePath: string, content: string) => {
//         try {
//           await RNFS.writeFile(filePath, content, "utf8");
//           console.log("written to file");
//         } catch (error) { //if the function throws an error, log it out.
//           console.log("ОШИБКА ПАЙТОН БЛЯТЬ"+error);
//         }
//     };

//     function getFileContent(DocumentDirectoryPath: string) {
//         RNFS.readDir(DocumentDirectoryPath)
//         .then(files => {
//             console.log(files.toString())
//             setDirectoryContents(files);
//         })
//         .catch(error => {
//             console.log('Error reading directory БЯЛТЬ: ', error);
//         });
//     }
//     async function bitch(){
//         const permission = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//                 {
//                   title: '',
//                   message: '',
//                   buttonNeutral: 'Ask Me Later',
//                   buttonNegative: 'Cancel',
//                   buttonPositive: 'OK'
//                 }
//               );
        
//               if (permission === 'denied') return;
//               if (permission === PermissionsAndroid.RESULTS.GRANTED) {
//                 return new Promise((resolve, reject) => {
//                 console.log('ЗАЕБИСЬ')
//                 RNFS.mkdir(directoryPath)
//                 makeFile(filePath, "Hi there!")
//                 getFileContent(directoryPath)
//                 console.log('ЗАЕБИСЬ ДВАЖДЫ')
//                 })
//               }
//         }
//     bitch()
//     return (
//     <ScrollContainer>
//         <FlatList
//         data={directoryContents}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Text>{item.name} - {item.isFile() ? 'File' : 'Directory'}</Text>
//         )}
//       />
//       <Pressable onPress={()=>{}}>
//         <Text style={styles.title}>
//             save?
//         </Text>
//       </Pressable>
//         </ScrollContainer>);
// };
// const styles = StyleSheet.create({
//     title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     marginLeft: 5,
//     },
//     label: {
//     fontSize: 20,
//     marginBottom: 16,
//     marginLeft: 15,
//     },
//     back: {
//       fontSize: 20,
//       marginBottom: 16,
//       marginTop: 10,
//       },
//    });
// export default Editor; 
