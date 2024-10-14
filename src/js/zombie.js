import Character from "./character";


export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40,
    this.defence = 10
  }
}
