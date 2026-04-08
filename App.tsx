

import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>

     <Text style={styles.title}> St10473808's sentence game</Text>
      
      <Image
       source={require('./assets/ice2.jpg')}
       style={styles.image}
      />
       
      <View style={styles.buttonSpacing} />
      <Button title="Add Animal" onPress={() => {}} />

      <View style={styles.buttonSpacing} />
      <Button title="Add Vehicle" onPress={() => {}} />

      <View style={styles.buttonSpacing} />
      <Button title="Add Noun" onPress={() => {}} />

      <View style={styles.buttonSpacing} />
      <Button title="Add Verb" onPress={() => {}} />

      <View style={styles.buttonSpacing} />
      <Button title="Add Adjective" onPress={() => {}} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#743030',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },

  buttonSpacing: {
    height: 15,
    width: '80%',
  },

  image: {
    width: 200,
    height: 200,
  },
});