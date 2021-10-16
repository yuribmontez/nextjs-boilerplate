import { Chakra } from 'components/Core';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
