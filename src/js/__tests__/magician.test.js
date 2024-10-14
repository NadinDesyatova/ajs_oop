import Magician from "../magician.js";


test('should correct creation of Magician object', () => {
  const result = new Magician('Neo');
  const expected = {
    name: "Neo",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(result).toEqual(expected);
});
