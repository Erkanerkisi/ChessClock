const Sound = require('react-native-sound');
Sound.setCategory('Playback');
const tick = new Sound('ticked.mp3', Sound.MAIN_BUNDLE);

export default tick