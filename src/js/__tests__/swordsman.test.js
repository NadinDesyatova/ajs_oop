import Swordsman from "../swordsman.js";


test('should correct creation of Swordsman object', () => {
  const result = new Swordsman('Neo');
  const expected = {
    name: "Neo",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(result).toEqual(expected);
});
