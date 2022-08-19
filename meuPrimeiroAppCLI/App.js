import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Title from './src/components/title';
import Main from "./src/components/Main/index"


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Title></Title>
      <Main></Main>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: '#2A2A2A' ,
    paddingTop: 80 ,
  }
});

export default App;
