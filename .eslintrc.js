module.exports = {
    extends: ['airbnb-typescript-prettier'],
    rules: {
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/static-property-placement': 0,
        'jsx-a11y/alt-text': 0,
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-unused-vars': "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-function": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },

};