const addSelectors = (container, modifierFunction) => {
    const rules = [];
  
    container.walkRules((rule) => {
      const selectors = rule.selectors.map((selector) =>
        modifierFunction(selector.slice(1))
      );
      rules.push(rule.clone({ selectors }));
    });
  
    return rules;
  };
  
  const dirVariants = ({ addVariant, e }) =>
    addVariant('direction', ({ container, separator }) => {
      const result = container.clone({ nodes: [] });
  
      ['ltr', 'rtl'].forEach((dir) => {
        result.nodes = result.nodes.concat(
          addSelectors(container, (className) => [
            `[dir='${dir}'] .${dir}${e(separator)}${className}`,
            `[dir='${dir}'].${dir}${e(separator)}${className}`,
          ])
        );
      });
  
      return result;
    });
  
  const importantVariants = ({ addVariant }) =>
    addVariant('important', ({ container }) => {
      container.walkRules((rule) => {
        rule.selector = `.\\!${rule.selector.slice(1)}`;
        rule.walkDecls((decl) => {
          decl.important = true;
        });
      });
    });
  
  const getConfig = {
    theme: {
      extend: {
        colors: {
          'ta-orange': {
            40: '#fff6f5',
            80: '#fff5f4',
            100: '#ffece9',
            150: '#FFDBCC',
            200: '#ffb799',
            300: '#ff9466',
            350: '#FF824C',
            400: '#ff7032',
            450: '#ff5e19',
            500: '#ff4d00',
            600: '#d75016',
            700: '#873714',
          },
          'ta-purple':{
            50:'#6C63FF',
            100:"#a15ee3",
            150:'#828EF9',
            200:'#EBEDFB'
          },
          'ta-gray': {
            50: '#ebebeb',
            75: '#F4F5F6',
            100: '#fffaf9',
            150: '#FBF9FA',
            200: '#f5f5f5',
            300: '#f1f1f1',
            325: '#F2F2F2',
            350: '#e7e6e6',
            400: '#dcdcdc',
            450: '#CFCFCF',
            500: '#b0b0b0',
            525: '#939DA9',
            550: '#8E8E93',
            600: '#848484',
            650: '#5e5e5e',
            700: '#3f3f3f',
            800: '#373737',
            900: '#333333',
            1000: '#292929',
            1100: '#999999',
            1200:'#323242' ,
            1300:'#7B7B8F' ,
            1400:'#C0C0CC' ,
            1500:'#8D8D9E' ,
            1600:'#E6E6EB' ,
            1700:'#9C9CAD',
            1800:'#EDEDF0'            
          },
          'ta-blue': {
            75: '#F0FAFF',
            100: '#ebf5ff',
            300: '#99CCFE',
            400: '#85C2FF',
            500: '#3399ff',
            600: '#1185fa',
            700: '#2f67f6',
            800: '#0F77E1',
            900: '#2a0af6',
            1000: '#0036FF',
          },
          'ta-green': {
            50: '#00ffc40d',
            100: '#99FFE7',
            150: '#b2deab',
            200: '#7bc570',
            250:"#11958A",
            300:'#17A63F',
            350:'#50CC98'
          },
          'ta-black':{
            50:'#0E0E14',
            100:'#7A7A7A',
            150:'#19191D'
          },
          'ta-blue':{
            50:'#2264D1'
          },
          'ta-download': '#b6301e',
          'ta-dark-steel-blue': '#283b54',
          'ta-light-steel-blue': '#506074',
          'ta-info': '#1575ea',
          'ta-success': '#00ec85',
          'ta-warning': '#fcc602',
          'ta-error': '#dd2211',
          'ta-warm-error': '#FCEEEE',
          'ta-highlight': '#fff6f4',
          'ta-overlay-dark': 'rgba(105, 108, 117, 0.5)',
          'ta-overlay-light': 'rgba(255, 255, 255, 0.7)',
          'ta-reports': '#ffbda2',
          'ta-actions': '#ffc636',
          'ta-management': '#00ffc4',
          'ta-account': '#333f4a',
          'ta-paid-out': '#33ce71',
          'ta-failed': '#ff4a1d',
          'ta-invoice': '#330FF8',
          'ta-page-bg': '#E4E4E4',
          'ta-error-light': '#EF4A3B',
          'ta-white': '#FFFFFF',
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '3.125rem',
        },
        borderWidth: {
          1: '1px',
          3: '3px',
          5: '5px',
          6: '6px',
        },
        minWidth: {
          6: '1.5rem',
          8: '2rem',
          9: '2.25rem',
          11: '2.75rem',
          12: '3rem',
          16: '4rem',
          18: '4.5rem',
          20: '5rem',
          28: '7rem',
          30: '7.5rem',
          40: '10rem',
          44: '11rem',
          64: '16rem',
          76: '19rem',
          84: '21rem',
          92: '23rem',
          112: '28rem',
          '40vw': '40vw',
        },
        maxWidth: {
          12: '3rem',
          16: '4rem',
          24: '6rem',
          28: '7rem',
          32: '8rem',
          36: '9rem',
          '20vw': '20vw',
          '35vw': '35vw',
          '40vw': '40vw',
          '50vw': '50vw',
          '70vw': '70vw',
          '80vw': '80vw',
          '90vw': '90vw',
          screen: '100vw',
          'screen-xs': '30rem',
        },
        minHeight: {
          5: '1.25rem',
          9: '2.25rem',
          18: '4.5rem',
          20: '5rem',
          24: '6rem',
          40: '10rem',
          44: '11rem',
          48: '12rem',
          52: '13rem',
          80: '20rem',
          '70vh': '70vh',
        },
        maxHeight: {
          12: '3rem',
          '80vh': '80vh',
          '4/5': '80%',
          125: '32rem',
        },
        width: {
          15: '3.375rem',
          18: '5rem',
          24: '6rem',
          32: '8rem',
          33: '8.25rem',
          68: '17rem',
          76: '19rem',
          84: '21rem',
          88: '22rem',
          90: '22.5rem',
          92: '23rem',
          100: '25rem',
          120: '30rem',
          128: '32rem',
          160: '40rem',
          180: '45rem',
          200: '50rem',
          220: '75rem',
          '20vw': '20vw',
          '35vw': '35vw',
          '40vw': '40vw',
          '50vw': '50vw',
          '70vw': '70vw',
          '80vw': '80vw',
          '90vw': '90vw',
          '8/9': '48%',
          '3/100': '3%',
        },
        height: {
          13: '3.25rem',
          17: '4.25rem',
          18: '4.5rem',
          22: '5.5rem',
          30: '7.5rem',
          34: '8.5rem',
          70: '17.5rem',
          80: '20rem',
          88: '22rem',
          120: '30rem',
          125: '32rem',
          135: '36rem',
          160: '40rem',
          '45vh': '45vh',
          '80vh': '80vh',
        },
        lineHeight: {
          11: '2.75rem',
          12: '3rem',
        },
        rotate: {
          30: '30deg',
        },
        boxShadow: {
          ga: '0px 4px 8px 0px rgba(0, 0, 0, 0.07)',
          'ta-top': '0px -4px 8px 0px rgba(0, 0, 0, 0.07)',
          'ta-right': '0px -8px 8px 0px rgba(0,0,0,0.07)',
          'ta-drawer':
            '0px 11px 15px -7px rgb(0 0 0 / 20%),0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
        },
        zIndex: {
          cover: '9999',
        },
        screens: {
          xxs: '320px',
          xs: '480px',
          '2xl': '1600px',
          '3xl': '2560px',
          'max-xs': { max: '480px' },
          'max-lg': { max: '1023px' },
        },
        strokeWidth: {
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
        },
        backgroundImage: () => ({
          'download-mobile-app':
            "url('/libs/core/assets/images/download-mobile-app/banner.png')",
          'download-for-ios':
            "url('/libs/core/assets/images/download-mobile-app/ios-button.png')",
          'download-for-android':
            "url('/libs/core/assets/images/download-mobile-app/android-button.png')",
        }),
      },
    },
    variants: {
      extend: {
        margin: ['direction', 'important'],
        outline: ['important', 'focus'],
        padding: ['direction', 'important'],
        height: ['important'],
        width: ['important'],
        textColor: ['important'],
        lineHeight: ['important'],
        borderRadius: ['direction', 'important'],
        display: ['important'],
        minWidth: ['important'],
        maxWidth: ['important'],
        position: ['direction', 'important'],
        backgroundColor: ['important'],
        borderColor: ['important'],
        borderStyle: ['important', 'hover', 'responsive'],
        borderWidth: ['important', 'direction', 'hover', 'focus'],
        textAlign: ['important', 'direction'],
        boxShadow: ['important', 'responsive'],
        overflow: ['important'],
        flexDirection: ['direction', 'important'],
        alignItems: ['important'],
        textDecoration: ['important'],
        fontWeight: ['important', 'hover'],
        fontSize: ['important', 'responsive'],
        inset: ['important', 'direction'],
        resize: ['important'],
        order: ['first', 'last'],
        cursor: ['hover'],
        flexWrap: ['important'],
      },
    },
    plugins: [
      /* This plugin is used for the dir variants (rtl / ltr support). */
      dirVariants,
      /* This custom plugin adds an important variant. */
      importantVariants,
    ],
  };
  
  module.exports = getConfig;
  exports.default = getConfig;
  