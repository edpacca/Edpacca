import { sanitizeScriptTags } from '$lib/utils/parse';
import { test, describe, expect } from 'vitest';

describe('santize', () => {
	const input = '<script>malicious code!</script>';
	const output = sanitizeScriptTags(input);
	const expectedOutput = 'malicious code!';
	test('script tags are removed', () => {
		expect(output).toEqual(expectedOutput);
	});
});
