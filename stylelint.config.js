/** @type import('stylelint').Configuration */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'at-rule-no-unknown': null,
  },
};
