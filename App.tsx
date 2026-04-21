import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {

  const [currentField, setCurrentField] = useState(null);
  const [input, setInput] = useState('');
  
  const [words, setWords] = useState({
    animal: '',
    vehicle: '',
    noun: '',
    verb: '',
    adjective: '',
  });

  // This function saves the word the user typed
  const saveWord = () => {
    if (!currentField) {
      return;
    }

    setWords({
      ...words,
      [currentField]: input,
    });

    setInput('');
    setCurrentField(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>St10473808's sentence game</Text>

      <Image 
        source={require('./assets/ice2.jpg')} 
        style={styles.image} 
      />

      <View style={styles.buttonSpacing} />
      <Button title="Add Animal" onPress={() => setCurrentField('animal')} />
      
      <View style={styles.buttonSpacing} />
      <Button title="Add Vehicle" onPress={() => setCurrentField('vehicle')} />
      
      <View style={styles.buttonSpacing} />
      <Button title="Add Noun" onPress={() => setCurrentField('noun')} />
      
      <View style={styles.buttonSpacing} />
      <Button title="Add Verb" onPress={() => setCurrentField('verb')} />
      
      <View style={styles.buttonSpacing} />
      <Button title="Add Adjective" onPress={() => setCurrentField('adjective')} />

    
      {currentField && (
        <>
          <TextInput
            placeholder={`Enter ${currentField}`}
            style={styles.input}
            value={input}
            onChangeText={setInput}
          />
          <Button title="Save Word" onPress={saveWord} />
        </>
      )}

      <View style={{ height: 25 }} />

      <Button 
        title="Show Story" 
        onPress={() => navigation.navigate('Story', words)} 
      />
    </View>
  );
}


function StoryScreen({ route, navigation }) {

  const { animal, vehicle, noun, verb, adjective } = route.params || {};

  const stories = [
    `One day, a ${adjective} ${animal} drove a ${vehicle} to the ${noun} and started to ${verb}.`,
    `A ${adjective} ${animal} stole a ${vehicle} and went to the ${noun} to ${verb} all day.`,
    `Suddenly, a ${animal} jumped into a ${vehicle} and rushed to the ${noun} to ${verb}.`,
  ];


  const story = stories[Math.floor(Math.random() * stories.length)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Story</Text>
      
      <Text style={styles.story}>
        {story}
      </Text>

      <View style={{ height: 30 }} />

      <Button 
        title="Go Back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
  },

  story: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 15,
  },
});