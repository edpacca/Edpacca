module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:svelte/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        extraFileExtensions: [".svelte"],
        project: ['tsconfig.json']
    },
    env: {
        es6: true,
        browser: true
    },
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            }
        }
    ],
    plugins: [
        "@typescript-eslint"
    ],
    ignorePatterns: [
        "node_modules"
    ],
    rules: {
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": [
            "error", {
                "argsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "svelte/no-object-in-text-mustaches": "off"
    }
}