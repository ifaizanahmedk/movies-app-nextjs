import { Provider } from 'react-redux';
import { Montserrat } from '@next/font/google';

import store from './store';
import Navbar from './components/Navbar';
import './globals.css';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} mx-32 mb-12 p-0`}>
        <Navbar />
        {children}
      </body>
    </html>
    // </Provider>
  );
}
