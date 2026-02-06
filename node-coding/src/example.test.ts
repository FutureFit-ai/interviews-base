import { add, sum } from './example';

describe('Example Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('sum', () => {
    it('should sum an array of numbers', () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it('should return 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(sum([1, -2, 3, -4])).toBe(-2);
    });
  });
});
