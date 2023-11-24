import React, {useState} from 'react';
import { IGenre, IMovie } from './src/services/movieService';
import Home from './src/views/Home';
import Genre from './src/views/Genre';
import Movie from './src/views/Movie';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Editor from './src/views/Editor';

export type MainStackParamList = {
  'Movie': {movie: IMovie}
  'Genre': {genre: IGenre}
  'Home': {home: typeof Home}
  'Editor': {editor: typeof Editor}
}
const MainStack = createNativeStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{title: 'Movie Genres'}}
        />
        <MainStack.Screen
          name="Editor"
          component={Editor}
          options={{title: 'Editor'}}
        />
        <MainStack.Screen
          name="Genre"
          component={Genre}
          options={{title: 'Movies'}}
        />
        <MainStack.Screen
          name="Movie"
          component={Movie}
          options={({route}) => ({title: route.params.movie.name.toString()})}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};


// const App = () => {
//   const [page, setPage] = useState<number>(0);
//   const [genre, setGenre] = useState<IGenre | undefined>(undefined);
//   const [movie, setMovie] = useState<IMovie | undefined>(undefined);
//   const chooseGenre = (lGenre: IGenre) => {
//     setGenre(lGenre);
//     setPage(1);
//   };
//   const chooseMovie = (lMovie: IMovie) => {
//     setMovie(lMovie);
//     setPage(2);
//   };
//   const backToGenres = () => {
//     setMovie(undefined);
//     setPage(1);
//   };
//   const backToHome = () => {
//     setMovie(undefined);
//     setGenre(undefined);
//     setPage(0);
//   };
//   switch (page) {
//     case 0:
//       return <Home chooseGenre={chooseGenre} />;
//     case 1:
//       return (
//         <Genre
//           backToHome={backToHome}
//           genre={genre}
//           chooseMovie={chooseMovie}
//         />
//       );
//     case 2:
//       return <Movie
//         backToGenres={backToGenres}
//         movie={movie}
//       />;
//   }
// };

export default App;