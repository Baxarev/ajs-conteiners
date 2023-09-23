import { Team } from './Team';
import { ErrorRepository } from './ErrorRepository';
import { Settings } from './Settings';

// const test2 = new Team();
// const test = new ErrorRepository();

// const obj = {
//   name: '22'
// }
// const obj2 = {
//   name: '47'
// }

// test2.add(obj)
// test2.add(obj)

// console.log(test.errMap)
// console.log(test.translate(9))

const settings = new Settings();
settings.setUserSetting('music', 'pop');
settings.setUserSetting('difficulty', 'normal');
console.log(Array.from(settings.settings));