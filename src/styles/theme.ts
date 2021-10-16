import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// const fonts = {
//   heading: `'DM Sans', sans-serif`,
//   body: `'DM Sans', sans-serif`,
// }

const theme = extendTheme({
  config,
  // fonts,
  colors: {
    primary: {
      500: 'yellow'
    }
  },
  styles: {
    global: {
      // body: {},
      a: {
        // color: '',
        _hover: {
          // color: '',
          textDecoration: 'underline',
        },
      },
      'h1,h2,h3,h4,h5,h6': {
        // color: '',
        fontWeight: 'bold',
      },
    },
  },
})

export default theme
