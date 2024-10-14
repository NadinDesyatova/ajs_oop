import Daemon from "../daemon.js";


test('should correct creation of Daemon object', () => {
  const result = new Daemon('Neo');
  const expected = {
    name: "Neo",
    type: "Daemon",
    health: 100,    
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(result).toEqual(expected);
});
