import Player from './player';
import Music from './music';

const music = new Music('Nothing else matters');
const player = new Player(music)
player.play()

