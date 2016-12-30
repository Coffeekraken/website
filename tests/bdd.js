import { expect } from 'chai'
import testingStack from 'coffeekraken-testing-stack';
const html = require('./fixture.html');

// preparing mocha
testingStack.mocha.injectHTML(html);
testingStack.mocha.run();

// tests
describe('{project-name}', () => {
	it('Should be a cool project', () => {
		expect(true).to.equal(true);
	});
});
