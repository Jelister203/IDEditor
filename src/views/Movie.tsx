import { Text, Pressable, StyleSheet } from "react-native";
import ScrollContainer from "../containers/ScrollContainer";
import { IMovie } from "../services/movieService";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../App";


type movieProps = NativeStackScreenProps<MainStackParamList, 'Movie'>;
// interface MovieProps {
//     backToGenres: Function;
//     movie: IMovie | undefined;
//   }
  const Movie = (props: movieProps) => {
    return (<ScrollContainer>
      <Text style={styles.title}>
        {props.route.params.movie.name}
      </Text>
      <Text style={styles.label}>
        {props.route.params.movie.desc}
      </Text>
      </ScrollContainer>);
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

   export default Movie;