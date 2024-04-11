module.exports = {
  extends: [
    'eslint-config-standard'
  ],
  env: {
    browser: true
  },
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }]
  }
}
