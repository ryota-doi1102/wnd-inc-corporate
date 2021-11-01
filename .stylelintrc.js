/** @type import('stylelint').Configuration */
module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-prettier',
        'stylelint-config-recess-order',
    ],
    plugins: ["stylelint-scss"],
};