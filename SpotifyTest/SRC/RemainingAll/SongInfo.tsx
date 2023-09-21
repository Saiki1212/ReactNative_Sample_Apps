import { StyleSheet, Text, View } from 'react-native'
import React, {PropsWithChildren} from 'react'
import { Track } from 'react-native-track-player'

type SonginfoProps = PropsWithChildren<{
    its_a_title_type : Track | null | undefined
}>

const SongInfoMaking = ({its_a_title_type} : SonginfoProps) => {
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.name}>
            {its_a_title_type?.title}
        </Text>
        <Text style={styles.artist}>
            {its_a_title_type?.artist}  .  {its_a_title_type?.album}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,
    
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
      },
      name: {
        marginBottom: 8,
        textAlign: 'center',
    
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
      },
      artist: {
        color: '#d9d9d9',
        textAlign: 'center',
      },
})

export default SongInfoMaking