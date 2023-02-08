import '../styles/globals.css';
import { initialState, reducer, StoreProvider } from '../context/Store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  function CustomLayout() {
    return getLayout(<Component {...pageProps} />);
  }

  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <CustomLayout />
    </StoreProvider>
  );
}

export default MyApp;
