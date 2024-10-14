import Bowman from "../bowman.js";


test('should correct creation of Bowman object', () => {
  const result = new Bowman('Neo');
  const expected = {
    name: "Neo",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };
  
  expect(result).toEqual(expected);
});
