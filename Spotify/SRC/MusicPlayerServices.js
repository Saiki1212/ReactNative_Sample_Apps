import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { PlayListData } from "./ConstantsFile";

export async function SetUp_Player() {
    let isSetUp = false
    try {
        await TrackPlayer.getCurrentTrack()
        isSetUp=true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetUp=true
    }
    finally {
        return isSetUp
    }
}

export async function AddingTrackplayer () {
    await TrackPlayer.add(PlayListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function PlayBackServices(){
    TrackPlayer.addEventListener(Event.RemotePause,  () => {
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext,  () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}