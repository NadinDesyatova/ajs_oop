import Undead from "../undead.js";


test('should correct creation of Undead object', () => {
  const result = new Undead('Neo');
  const expected = {
    name: "Neo",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(result).toEqual(expected);
});
