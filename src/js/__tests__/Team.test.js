import { Team } from '../Team'

let test;
const obj = {
  name: '22'
}
const obj2 = {
  name: '47'
}

describe('Team test', () => {
  beforeEach(() => {
    test = new Team();
  })
  
  it('Тест метода add', () => {
    test.add(obj);
    expect(test.members.has(obj)).toBe(true)
  })

  it('Тест метода addAll', () => {
    test.addAll(obj, obj2);
    expect(test.members.has(obj)).toBe(true);
    expect(test.members.has(obj)).toBe(true);
  })

  it('Тест метода add нельзя добавить тот же класс', () => { 
    expect(() => {
      test.add(obj);
      test.add(obj);
    }).toThrow('Невозможно добавить уже существующего персноажа')
  })

  it('Тест метода toArray', () => {
    const arr = test.toArray();
    expect(arr).toEqual([]);
  })
})