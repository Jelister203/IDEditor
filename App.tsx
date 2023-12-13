import React, {useState} from 'react';
import Home from './src/views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Editor from './src/views/Editor';

export type MainStackParamList = {
  'Home': {home: typeof Home}
  'Editor': {
    editor: typeof Editor,
    code: String,
    id: Number,
    upd: Function
  }
}
const MainStack = createNativeStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{title: 'IDEditor'}}
        />
        <MainStack.Screen
          name="Editor"
          component={Editor}
          options={{title: 'Editor'}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;