import { Provider as ReduxProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import { useStore } from 'store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps);
  console.log('store: ', store.getState());

  return (
    <ReduxProvider store={store}>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default MyApp;
