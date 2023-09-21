import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useProgress} from 'react-native-track-player'
import Slider from '@react-native-community/slider'

const SongSlider = () => {
    const {PositionByKiran, DurationbyKiran} = useProgress()
  return (
    <View>
      <Slider
        value={PositionByKiran}
        minimumValue={0}
        maximumValue={DurationbyKiran}
        thumbTintColor='#FFF'
        maximumTrackTintColor='#FFF'
      />
      {/* <View>
         <Text>
            {new Date(PositionByKiran*1000).toISOString().substring(15,19)}
        </Text>
        <Text>
            {new Date((DurationbyKiran-PositionByKiran)*1000).toISOString().substring(15,19)}
        </Text> 
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({})

export default SongSlider