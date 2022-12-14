module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        //"./nuxt.config.{js,ts}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                primary: '#80ffbf',
                secondary: '#B2C2BF',
                bg_color: '#221F1F',
                light_white: '#ECFFFB',
                light_bg: '#473D3D'

            },
            fontSize: {
                'main-font': '100px',
                'xs': '12px'
            },
            letterSpacing: {
                tightest: '-.075em',
                tighter: '-.05em',
                tight: '-.025em',
                normal: '0',
                wide: '.025em',
                wider: '.2em',
                widest: '.3em',

            },
            spacing: {
                '128': '32rem',
            },
            fontFamily: {
                logo: 'Rubik Moonrocks',
                main: 'Righteous',
                test1: 'Cinzel',
                headers: 'Splash',
                test2: 'Merienda One'
            }
        },
    },
    plugins: [{}],
}