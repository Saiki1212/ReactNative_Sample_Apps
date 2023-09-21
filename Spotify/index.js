
import {AppRegistry} from 'react-native';
import App from './SRC/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { PlayBackServices } from './SRC/MusicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlayBackServices)
