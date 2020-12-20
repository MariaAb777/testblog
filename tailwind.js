module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue',
  ],
  variants: {
    zIndex: ['responsive', 'hover'],
    position: ['responsive', 'hover'],
    padding: ['responsive', 'last'],
    margin: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
    backgroundColor: ['responsive', 'hover'],
    borderColor: ['responsive', 'hover'],
    textColor: ['responsive', 'hover']
  },
  theme: {
    extend: {
      colors: {
        theme: {
          '50': '#f8f7fa',
          '100': '#f4ecf9',
          '200': '#e9cff7',
          '300': '#dfaff4',
          '400': '#d87ff2',
          '500': '#d052ef',
          '600': '#b434e5',
          '700': '#8929c8',
          '800': '#66239a',
          '900': '#4f1e76',
          1: '#3c366b',
          2: '#F1F5F8',
          3: '#484278',
          4: '#4e487d',
          5: '#dee7ef',
          6: '#D32929',
          7: '#365A74',
          8: '#D2DFEA',
          9: '#91C714',
          10: '#3160D8',
          11: '#F78B00',
          12: '#FBC500',
          13: '#7F9EB9',
          14: '#E6F3FF',
          15: '#8DA9BE',
          16: '#607F96',
          17: '#FFEFD9',
          18: '#D8F8BC',
          19: '#E6F3FF',
          20: '#2449AF',
          21: '#284EB2',
          22: '#395EC1',
          23: '#D6E1FF',
          24: '#4e487d',
          25: '#C6D4FD',
          26: '#E8EEFF',
          27: '#98AFF5',
          28: '#1A389F',
          29: '#142C91',
          30: '#8da3e6',
          31: '#ffd8d8',
          32: '#3b5998',
          33: '#4ab3f4',
          34: '#517fa4',
          35: '#0077b5',
          36: '#d18d96',
          37: '#c7d2ff',
          38: '#15329A',
          40: '#203FAD',
          41: '#BBC8FD'
        },
        dark: {
          1: '#293145',
          2: '#232a3b',
          3: '#313a55',
          4: '#1e2533',
          5: '#3f4865',
          6: '#2b3348',
          7: '#181f29'
        },
        home: {
          1: '#068EC1',
          2: '#06b3e7',
        }
      },
      fontFamily: {
        'roboto': ['Roboto']
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '75': 75,
        '100': 100,
        'auto': 'auto',
      },
      container: {
        center: true
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1250px',
        'xxl': '1980px'
      }
    }
  },
  plugins: [
  ]
}