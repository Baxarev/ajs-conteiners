export class ErrorRepository {
  
  constructor() {
    this.errMap = new Map();

    this.errMap.set(69, 'Невозможно добавить уже существующего персноажа')
  }

  translate(code) {
    return this.errMap.has(code) ? this.errMap.get(code) : 'Unknown error';
  }
}