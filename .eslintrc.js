module.exports = {
  // 'parser': '@typescript-eslint/parser',
  // "parser": "vue-eslint-parser",
  extends: ['plugin:vue/vue3-recommended', '@vue/typescript/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // not needed for vue 3
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
