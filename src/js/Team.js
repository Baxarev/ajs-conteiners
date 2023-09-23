import { ErrorRepository } from './ErrorRepository';

export class Team {
  constructor() {
      this.members = new Set();
      this.errorRepository = new ErrorRepository();
  }
  
  add(character) {
    if (this.members.has(character)) {
      throw new Error(this.errorRepository.translate(69))
    } else {
      this.members.add(character)
    }
  }

  addAll(...characters) {
    characters.forEach(i => this.members.add(i))
  }

  toArray() {
    return Array.from(this.members)
  }
}