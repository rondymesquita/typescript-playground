import consola from 'consola'
import Music from './music'

export default class Player {
  music: Music;
  constructor (music: Music) {
    this.music = music
    consola.info('Music added')
  }

  play () {
    this.music.play()
  }
}
