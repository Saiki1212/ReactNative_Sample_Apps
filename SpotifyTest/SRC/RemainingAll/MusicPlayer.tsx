import { StyleSheet, Text, View, Dimensions, Image, FlatList, ScrollView} from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import { PlayListData } from './AllData'
import SongInfoMaking from './SongInfo'
import SongSliderMaking from './SongSlider'
import ControlCenterMaking from './ControlCenter'


const {width} = Dimensions.get('window')

const MusicPlayerMain = () => {
    const [tracku, setTracku] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTracku(playingTrack)
                break;
        }
    })

    const JustAnArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {tracku?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: tracku?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

  return (
    <ScrollView>
      <View>
      <FlatList 
      style={styles.container}
        horizontal
        data={PlayListData}
        renderItem={JustAnArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <SongInfoMaking its_a_title_type={tracku} />
      <SongSliderMaking />
      <ControlCenterMaking />

    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
      },
      listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      albumContainer: {
        width: 300,
        height: 300,
      },
      albumArtImg: {
        height: '100%',
        borderRadius: 4,
      },
})

export default MusicPlayerMain