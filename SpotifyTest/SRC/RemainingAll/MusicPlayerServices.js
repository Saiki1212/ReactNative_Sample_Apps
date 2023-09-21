import TrackPlayer, { RepeatMode } from "react-native-track-player";
import { PlayListData } from "./AllData";

export async function SETUPTHEPLAYER() {
    let isplayerset = false;
    try {
        await TrackPlayer.getCurrentTrack();
        isplayerset = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isplayerset = true;
    }
    finally{
        return isplayerset;
    }
}

export async function AddingTheTrackPlayer() {
    await TrackPlayer.add(PlayListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function AllThePlayBackServices() {
    TrackPlayer.addEventListener(Event.RemmotePause, () =>{
        TrackPlayer.pause();
    })
    TrackPlayer.addEventListener(Event.RemmotePlay, () =>{
        TrackPlayer.play();
    })
    TrackPlayer.addEventListener(Event.RemmoteNext, () =>{
        TrackPlayer.skipToNext();
    })
    TrackPlayer.addEventListener(Event.RemmotePrevious, () =>{
        TrackPlayer.skipToPrevious();
    })
}