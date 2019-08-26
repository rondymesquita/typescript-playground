import consola from 'consola'

export default class Music {
  name: string;
  constructor (name: string) {
    this.name = name
  }

  play () {
    consola.info(`${this.name} is playing...`)
  }
}
