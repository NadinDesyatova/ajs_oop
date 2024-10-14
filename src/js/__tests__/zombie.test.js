import Zombie from "../zombie.js";


test('should correct creation of Zombie object', () => {
  const result = new Zombie('Neo');
  const expected = {
    name: "Neo",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(result).toEqual(expected);
});
