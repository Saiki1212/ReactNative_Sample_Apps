import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'
import { PlayListData } from '../ConstantsFile'

type SongProps = PropsWithChildren<{
    track : Track | null | undefined
}>

const SongInfo = ({track} : SongProps) => {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.Name}>
            {track?.title}
        </Text>
        <Text style={styles.Artist}>
            {track?.album}  .  {track?.artist}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: '90%',
      marginTop: 18,
  
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'center',
  },
  Name: {
    marginBottom: 8,
      textAlign: 'center',
  
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
  },
  Artist: {
    color: '#d9d9d9',
      textAlign: 'center',
  }
})

export default SongInfo