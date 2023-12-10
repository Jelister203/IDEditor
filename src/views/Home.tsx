import {
  FlatList,
    Pressable,
    StyleSheet,
    Text,
    
} from 'react-native';

import {
    useEffect,
    useState
} from 'react';

import ScrollContainer from '../containers/ScrollContainer';
import { MainStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Editor from './Editor';
import axios from 'axios';
import styles from '../ccs/Style';
type homeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;
const Home = (props: homeProps) => {
  const [names, setNames] = useState(String);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://10.0.2.2:5000/browse');
          setNames(response.data);
          console.log(names)
        } catch (error) {
          setNames("404");
        }
      };
      fetchData();
    }, []);
  return (
    <ScrollContainer>
      <FlatList
        data={names}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() =>
            props.navigation.navigate('Editor', {editor: Editor, code: item[2], id: Number(item[0])})}>
            <Text style={styles.labelButton}>{item[1]}</Text>
          </Pressable>
        )}
      />
      <Pressable style={styles.appButtonContainer} onPress={() => {
        var fetchData = async () => {
          try {
            const response = await axios.get('http://10.0.2.2:5000/browse');
            setNames(response.data);
          } catch (error) {
            setNames("404");
          }}
          fetchData();
      }}>
      <Text style={styles.labelBold}>
        Update
      </Text>

      </Pressable>
    </ScrollContainer>
  );
};


export default Home;