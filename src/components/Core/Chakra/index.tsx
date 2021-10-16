import { GetServerSideProps } from 'next'
import { ReactNode } from 'react'
import { ChakraProvider, cookieStorageManager, localStorageManager, } from '@chakra-ui/react'

import theme from 'styles/theme'

interface ChakraProps {
  cookies?: any;
  children: ReactNode;
}

const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}

export default Chakra
