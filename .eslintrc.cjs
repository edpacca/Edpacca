module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
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
            processor: "svelte3/svelte3"
        }
    ],
    settings: {
        "svelte3/typescript": true
    },
    plugins: [ 
        "svelte3",
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
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
    }
}