import Character from '../character';

test("new Character('kolia', 'Bowman') is defined", () => {
  const bowman = new Character('kolia', 'Bowman');
  expect(bowman).toBeDefined();
});

test("new Character('koliaKoliaNikolay', 'Bowman') is error", () => {  
  expect(
    () => {const bowman = new Character('koliaKoliaNikolay', 'Bowman')}
    ).toThrow();
});

test("new Character('kolia', 'MozgMan') is error", () => {  
  expect(
    () => {const bowman = new Character('kolia', 'MozgMan')}
    ).toThrow();
});