import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { PlayListData } from '../ConstantsFile'
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player'
import SongInfo from './SongInfo'
import SongSlider from './SongSlider'
import MusicController from './MusicController'

const {width} = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([ Event.PlaybackTrackChanged ], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const PlayingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(PlayingTrack)
                break;
        }
    })

    const RenderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image 
                            style={styles.albumArtImg}
                            source={{uri: track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList
            horizontal
            data={PlayListData}
            renderItem={RenderArtWork}
            keyExtractor={SongId => SongId.id.toString()}
        />

        <SongInfo
            track={track}
        />
        <SongSlider />

    </View>
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
        // width: 100,
        borderRadius: 4,
      },
})

export default MusicPlayer