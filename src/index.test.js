import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My first test', () => {
    it('should pass', () => {
        expect(true).to.equal (true)
    });
});

describe('index.html', () => {
    it('should say Hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementByTagName('h1')[0];
            expect(h1.innerHtml).to.equal('Hello Node World');
            done();
            window.close();
        })
    });
});
