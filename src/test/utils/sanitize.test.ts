import { sanitizeScriptTags } from '$lib/utils/parse';
import { test, describe, expect } from 'vitest';

const inputs = [
	'<script>malicious code!</script>',
	'<script src="malicious.js">malicious code!</script>',
	'<script async src="malicious.js">malicious code!</script>',
	"<script async src='malicious.js'   >malicious code!</script>",
	'<script    >malicious code!</script>',
	'<script   >malicious code!</  script  >',
	'<SCRIPT>malicious code!</SCRIPT>',
	'<SCRIPT    >malicious code!</SCRIPT>',
	'<SCRIPT   >malicious code!</  SCRIPT  >',
]

describe('santize', () => {
	inputs.forEach(input => {
		const output = sanitizeScriptTags(input);
		const expectedOutput = 'malicious code!';
		test('script tags are removed', () => {
			expect(output).toEqual(expectedOutput);
		});
	})
});
