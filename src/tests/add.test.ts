import {describe, expect, it} from '@jest/globals';

describe('add', () => {
    it('adds 1 + 2 to equal 2', () => {
        expect(1 + 1).toBe(2);
    });

    it('adds 1 + 2 to equal 3', () => {
        expect(1 + 1).toBe(3);
    });
});