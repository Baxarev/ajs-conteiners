import { ErrorRepository } from '../ErrorRepository'

test('Тест translate()', () => {
  const test = new ErrorRepository();
  const anserTrue =  test.translate(69);
  const anserFalse =  test.translate(70);
  expect(anserTrue).toBe('Невозможно добавить уже существующего персноажа');
  expect(anserFalse).toBe('Unknown error');
});