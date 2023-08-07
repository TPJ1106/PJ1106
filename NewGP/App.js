import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import 'react-native-reanimated'

export default function App() {
  function HelpScreenHandler(){

  };

  return (
    <View>
      <View style={styles.forHelpButton}>
        <Button title='HELP' onPress={HelpScreenHandler}/>
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
