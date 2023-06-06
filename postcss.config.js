let productSettings;

if(!process.env.DEBUG) {
  productSettings = { cssnano: { preset: 'default' }};
}

module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: {},
        autoprefixer: {},
        ...productSettings,
    }
}
