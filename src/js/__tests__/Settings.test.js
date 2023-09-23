import { Settings } from '../Settings'

test('test settings', () => {
  const settings = new Settings();

  settings.setUserSetting('music', 'pop');
  settings.setUserSetting('difficulty', 'normal');

  let arr = Array.from(settings.settings);

  expect(arr).toEqual([
    ["theme", "dark"],
    ["music", "pop"],
    ["difficulty", "normal"],
  ])
});