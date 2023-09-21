import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { AllThePlayBackServices } from './MusicPlayerServices'

const ControlCenterMaking = () => {

    const aPlayBackState = usePlaybackState()

    //next Button
    const SkippingToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    //Previous Button
    const SkippingToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayBack = async (playback : State) => {
        const CurrTrack = await TrackPlayer.getCurrentTrack()
        if (CurrTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

  return (
    <View style = {styles.container}>
        <Pressable onPress={SkippingToPrevious}>
            <Icon style={styles.icon} name='skip-previous' size={40}></Icon>
        </Pressable>
        <Pressable onPress={SkippingToPrevious}>
            <Icon style={styles.icon} 
            name = {aPlayBackState === State.Playing ? "pause" : "play-arrow"}
            size={75}></Icon>
        </Pressable>
        <Pressable onPress={SkippingToNext}>
            <Icon style={styles.icon} name='skip-next' size={40}></Icon>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
    
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#FFFFFF',
      },
      playButton: {
        marginHorizontal: 24,
      },
})

export default ControlCenterMaking
