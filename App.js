import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import MyTodos from './components/todos';

export default function App() {

  const [mytodos, setTodos] = useState([
    {task: 'Read Books', id: '1'},
    {task: 'Go to Walk', id: '2'},
    {task: 'Go to Sleep', id: '3'},
  ]);

  const RemoveHandler = (id) => {
    console.log(id);
  }
  return (
    <View style={styles.container}>
      <Header />
      <MyTodos mytodos={mytodos} RemoveHandler={RemoveHandler}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
