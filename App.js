import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import MyTodos from './components/todos';
import AddTodo from './components/addtodo';

export default function App() {

  const [mytodos, setTodos] = useState([
  ]);


  const RemoveHandler = (id) => {
    setTodos((prev)=>{
      return prev.filter(todo => todo.id != id);
    })
  }
  const AddHandler = (data)=> {
    setTodos((previou)=> {
      return [
        {task: data, id: Math.random.toString()},
        ...previou
      ]
    }
    )
  }
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo AddHandler={AddHandler}/>
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
