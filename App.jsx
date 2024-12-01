import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const App = () => {

  const handlePress = () => {
    alert('Button Pressed');
  }
  return (
    <View>
      <Text style={{color: 'red', fontSize: 30}}> React Native </Text>
      <Text style={styles.text}>Anushka Verma</Text>
      <Button title="Click Me" onPress={handlePress} />

      <MyCard name="Anushka Verma" age={23} />
      <MyCard name="Mahak Verma" age={21} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 40,
  },
});

const MyCard = ({name, age}) => {
  return (
    <View>
      <Text style={{color:'blue', fontSize: 36}}>My Card</Text>
      <Text style={{color:'white'}}>Name: {name}</Text>
      <Text style={{color:'white'}}>Age: {age}</Text>
    </View>
  )
}
