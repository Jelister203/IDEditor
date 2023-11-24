import {
    Pressable,
    StyleSheet,
    Text,
    
  } from 'react-native';
  import {
    useEffect,
    useState
  } from 'react';
import {IGenre, IMovie} from '../services/movieService';
import ScrollContainer from '../containers/ScrollContainer';
import {getMovies, getMovieByGenreId} from '../services/movieService';
import { MainStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type genreProps = NativeStackScreenProps<MainStackParamList, 'Genre'>;
const Genre = (props: genreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    if (typeof props.route.params?.genre !== 'undefined') {
      setMovies(getMovieByGenreId(props.route.params.genre.id));
    }
  }, [props.route.params.genre]);
  return (
    <ScrollContainer>
        {movies.map(movie => {
          return (
            <Pressable onPress={() =>
              props.navigation.navigate('Movie', {movie: movie})}>
            <Text style={styles.genreLabel}>
              {movie.name}
            </Text>
            </Pressable>
          );
        })}
    </ScrollContainer>
  );
};

// interface GenreProps {
//  genre: IGenre | undefined;
//  chooseMovie: Function;
//  backToHome: Function;
// }
// const Genre = (props: GenreProps) => {
//  let id;
//  if (typeof props.genre !== 'undefined') {
//   id = props.genre.id
//  }
//  else {
//   id = -1
//  }
//  const [movies, setMovies] = useState<IGenre[]>(getMovieByGenreId(id));
//  let name = props.genre?.name.toString()
 


// return (
{/* <ScrollContainer>
<Text style={styles.genreTitle}>{name} Movies</Text>
{movies.map(movie => {
return (
<Pressable onPress={() =>
props.chooseMovie(movie)}>
<Text style={styles.genreLabel}>{movie.name}
</Text>
</Pressable>
);
})}

<Pressable onPress={() => props.backToHome()}>
<Text style={styles.back}>Back to Genres</Text>
</Pressable>

</ScrollContainer> */}
// );
// };

const styles = StyleSheet.create({
  genreLabel: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    },
 back: {
 fontSize: 20,
 marginBottom: 16,
 marginTop: 10,
 },
 genreTitle: {
 fontSize: 30,
 fontWeight: 'bold',
 marginBottom: 10,
 marginLeft: 5,
 },
});
export default Genre