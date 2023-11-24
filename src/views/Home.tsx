import {
    Pressable,
    StyleSheet,
    Text,
    
} from 'react-native';

import {
    useEffect,
    useState
} from 'react';

import {
  IGenre,
  getGenres
} from '../services/movieService';

import ScrollContainer from '../containers/ScrollContainer';
import { MainStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Editor from './Editor';

type homeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;
const Home = (props: homeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  useEffect(() => {
    setGenres(getGenres());
  }, []);
  return (
    <ScrollContainer>
      {/* {genres.map(genre => {
        return (
          <Pressable onPress={() =>
            props.navigation.navigate('Genre', {genre: genre})}>
              <Text style={styles.genreLabel}>
                {genre.name}
              </Text>
          </Pressable>
        );
      })} */}
    
    <Pressable onPress={() =>
            props.navigation.navigate('Editor', {editor: Editor})}>
              <Text style={styles.editorLabel}>
                Go to Editor
              </Text>
          </Pressable>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
    genreLabel: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    },
    editorLabel: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: "bold",
    },
    genreTitle: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 5,
    },
   });
export default Home;