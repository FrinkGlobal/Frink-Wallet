const production = !process.env.ROLLUP_WATCH;
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('postcss-import')(),
        require('tailwindcss'),
        require('autoprefixer'),
        production &&
            purgecss({
                content: ['./**/*.html', './**/*.svelte'],
                defaultExtractor: content => {
                    const broadMatches =
                        content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

                    const innerMatches =
                        content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

                    return broadMatches.concat(innerMatches);
                },
            }),
    ],
};