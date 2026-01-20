import { test } from '../../assert';
const tick = () => Promise.resolve();

export default test({
	async test({ assert, target }) {
		target.innerHTML = '<test-delegation-element></test-delegation-element>';
		/** @type {any} */
		const el = target.querySelector('test-delegation-element');

		await tick();

		const button = el.shadowRoot.querySelector('button');
		assert.equal(button.textContent, 'clicked 0 times');

		button.click();
		await tick();
		assert.equal(button.textContent, 'clicked 1 times');

		button.click();
		await tick();
		assert.equal(button.textContent, 'clicked 2 times');

		el.addEventListener('click', () => {});
		await tick();
		button.click();
		await tick();
		assert.equal(button.textContent, 'clicked 3 times');
	}
});
