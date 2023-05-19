const { func } = require('../exercise');

describe('Roman to number', () => {
    it('should return 3 for input "III"', () => {
      const input = 'III';
      const output = 3;
      expect(func(input)).toBe(output);
    });
  
    it('should return 58 for input "LVIII"', () => {
      const input = 'LVIII';
      const output = 58;
      expect(func(input)).toBe(output);
    });
  
    it('should return 1994 for input "MCMXCIV"', () => {
      const input = 'MCMXCIV';
      const output = 1994;
      expect(func(input)).toBe(output);
    });
  });