module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'indent': 'off',
    'no-tabs': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-trailing-spaces': 'off',
    'prefer-const': 'off',
    'eqeqeq': 'off',
    'quote-props': 'off',
    'space-before-blocks': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/order-in-components': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'no-multi-spaces': 'off',
    'object-shorthand': 'warn',
    'no-unused-vars': 'warn',
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号  
    "comma-dangle": [2, "never"],  
    // 控制逗号前后的空格  
    "comma-spacing": [2, { "before": false, "after": true }],  
    // 文件末尾强制换行  
    "eol-last": 2,  
  }
}
