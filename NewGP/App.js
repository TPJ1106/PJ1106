import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from'react'
import { Audio } from 'expo-av'


export default function App() {
  function HelpScreenHandler(){

  };

  const [sound, setSound] = React.useState();

  async function playSound() {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('./assets/TestSound.wav'));
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <View style={styles.forHelpButton}>
        <Button title='HELP' onPress={playSound}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forAll: {
    flexDirection: 'row'
  },
  forHelpButton: {
    marginTop: 40,
    marginLeft: '85%',
    width: '15%',
    alignItems: 'center',
  },
});
