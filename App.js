import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

//Functional Component using Hooks
const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if(!text) {
      Alert.alert('No item', 'Please enter an item', [{text: 'Ok'}]);
    } 
    else{
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };
  


  return (

    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />

      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />)} 
      />
    </View>

  );
};
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });



export default App;