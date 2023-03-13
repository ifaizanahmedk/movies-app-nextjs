/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import store from '@/redux/store';
import Navbar from '@/components/Navbar';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
