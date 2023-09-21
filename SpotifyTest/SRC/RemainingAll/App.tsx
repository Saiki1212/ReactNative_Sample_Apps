
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SETUPTHEPLAYER, AddingTheTrackPlayer } from './MusicPlayerServices';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import MusicPlayerMain from './MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, SetIsPlayerReady] = useState(false)

  async function setUpTheTrackBabe() {
    let isSet = await SETUPTHEPLAYER()
    if(isSet) {
      await AddingTheTrackPlayer()
    }
    SetIsPlayerReady(isSet)
  }

  useEffect(() => {
    setUpTheTrackBabe()
  }, [])

  if (!isPlayerReady) {
    return (
      <ScrollView>
        <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
      </ScrollView>
      
    )
  }

  
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayerMain />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  gradiant : {}
  
});

export default App;
