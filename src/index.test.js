import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My first test', () => {
    it('should pass', () => {
        expect(true).to.equal (true)
    });
});

describe('index.html', () => {
    it('should say Hello', () => {
        const index = fs.readFileSync('../src/index.html', 'utf-8')
    });
});
