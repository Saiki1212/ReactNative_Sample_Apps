import { Track } from "react-native-track-player";

import Jailer from '../SongImageFolder/Jailer.jpg'
import Master from '../SongImageFolder/Master.jpg'
import Bahubali from '../SongImageFolder/Bahubali.jpg'
import Kushi from '../SongImageFolder/Kushi.jpg'
import RRR from '../SongImageFolder/RRR.jpg'

export const PlayListData : Track[] = [
    {
        id: 1,
        title: 'Jailer',
        artist: 'AnirudhRavichander, Super Subu',
        album: 'Hukum-Thalaivar',
        artwork: '../SongImageFolder/Jailer.jpg',
        url: require('../MusicFolder/Jailer.mp3')
    },
    {
        id: 2,
        title: 'Master',
        artist: 'AnirudhRavichander, Gaana Balachandar',
        album: 'Master Coming',
        artwork: '../SongImageFolder/Master.jpg',
        url: require('../MusicFolder/Master.mp3')
    },
    {
        id: 3,
        title: 'Kushi',
        artist: 'Hesham Abdul wahab, Chinmayi',
        album: 'Aradhya(From Kushi)',
        artwork: '../SongImageFolder/Kushi.jpg',
        url: require('../MusicFolder/Kushi.mp3')
    },
    {
        id: 4,
        title: 'RRR',
        artist: 'Kala Bhairava, M. M. Keeravani',
        album: 'Komuram Bhemudo',
        artwork: '../SongImageFolder/RRR.jpg',
        url: require('../MusicFolder/RRR.mp3')
    },
    {
        id: 5,
        title: 'Bahubali',
        artist: 'M. M. Keeravani',
        album: 'Nuppula Swasa Ga',
        artwork: '../SongImageFolder/Bahubali.jpg',
        url: require('../MusicFolder/Bahubali.mp3')
    },
]