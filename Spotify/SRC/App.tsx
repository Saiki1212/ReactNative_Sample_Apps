
import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SetUp_Player, AddingTrackplayer} from './MusicPlayerServices'
import MusicController from './Components/MusicController';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MusicPlayer from './Components/MusicPlayer';



function App(): JSX.Element {
  const [isPlayerReady, setisPlayerReady] = useState(false)

  async function SetuPThePlayer () {
    let isSetup = await SetUp_Player()
    if(isSetup) {
      await AddingTrackplayer()
    }
    setisPlayerReady(isSetup)
  }

  useEffect(() => {
    SetuPThePlayer()
  }, [])
  
  if(!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer></MusicPlayer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
