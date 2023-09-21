import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PlayBackServices } from '../MusicPlayerServices'

const MusicController = () => {
    const PlayBackSetUp = usePlaybackState()

    const SkippingToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    const SkippingToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const TogglePlayPause = async (playback: State) => {
        const CurrTrack = await TrackPlayer.getCurrentTrack()
        if(CurrTrack !== null) {
            if(playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            }
            else {
                await TrackPlayer.pause()
            }
        }
    }


  return (
    <View style={styels.Container}>
      <Pressable onPress={SkippingToNext}>
        <Icon style={styels.I} name='skip-previous' size={40}/>
      </Pressable>
      <Pressable onPress={() => TogglePlayPause(PlayBackSetUp)}>
        <Icon style={styels.I} name='skip-previous' size={40}/>
      </Pressable>
      <Pressable onPress={SkippingToPrevious}>
        <Icon 
        style={styels.I} 
        name= {PlayBackSetUp === State.Playing ? 'pause' : 'play-arrow'}
        size={60}/>
      </Pressable>
    </View>
  )
}

const styels = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    I: {
      color: '#ff'
    },
})

export default MusicController