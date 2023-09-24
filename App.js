import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos,setTodos]=useState([
    {content:'watching TV',key:'1'},
    {content:'going to gym',key:'2'},
    {content:'studing french',key:'3'},
  ])

  const handleDelete=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(
        todo => todo.key !== key
      )
    })
  }

  const handleSubmit = (text) => {
    if(text.length > 3){
      Keyboard.dismiss()
      setTodos((prevTodos)=>{
        return [
          {content:text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else{
      Alert.alert('TODOS MUST BE OVER THAN 3 CHARACTER ')
      Keyboard.dismiss()
    }
  }

  return (
      <View style={styles.container}>
        <Header />
        <AddTodo handleSubmit={handleSubmit}/>
        <View style={styles.content}> 
          <FlatList
            scrollEnabled
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} handleDelete={handleDelete}/>
            )}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop:35,
  },
  content: {
    paddingHorizontal:30,
    paddingBottom:20
  },
})