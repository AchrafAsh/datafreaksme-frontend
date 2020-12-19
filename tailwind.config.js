module.exports = {
    purge: {
        enable: true,
        content: ['./pages/**/*.tsx', './src/components/**/*.tsx']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito']
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
