
const DavidHome = require('../dist/my-library')
describe('add', () => {
    test('adds 2 + 4 to equal 6', () => {
      expect(DavidHome.add(2, 4)).toBe(6);
    });
  
    test('adds -10 + 5 to equal -5', () => {
      expect(DavidHome.add(-10, 5)).toBe(-5);
    });
  
    test('adds 0 + 0 to equal 0', () => {
      expect(DavidHome.add(0, 0)).toBe(0);
    })
  });
  
  describe('multiply', () => {
    test('multiplies 2 * 5 to equal 10', () => {
      expect(DavidHome.multiply(2, 5)).toBe(10);
    });
  
    test('multiplies -4 * 3 to equal -12', () => {
      expect(DavidHome.multiply(-4, 3)).toBe(-12);
    });
  
    test('multiplies 3 * 90 to equal 270', () => {
      expect(DavidHome.multiply(3, 90)).toBe(270);
    });
  });
  