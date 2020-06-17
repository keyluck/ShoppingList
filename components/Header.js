import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Functional Component
//Can use props with props.title or destructuring to pass title to component
const Header = ({ title}) => {
  return (

    <View style={styles.header}>
      <Text style ={styles.text}>{title}</Text> 
    </View>

  );
};

Header.defaultProps = {
    title: 'Shopping List',
};

const styles = StyleSheet.create({
header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
},
text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
}
});



export default Header;