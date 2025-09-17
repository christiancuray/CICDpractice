import { describe, it, expect } from 'vitest';
import { sum } from '../src/math.js';

describe('testing sum function', () => {
  it('it adds two parameter numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 0)).toBe(1);
    expect(sum(0, 0)).toBe(0);
    expect(sum(9, 1)).not.toBe(9);
  });

  it('it adds two negative numbers', () => {
    expect(sum(-1, -4)).toBe(-5);
    expect(sum(-1, 0)).toBe(-1);
  });
});
