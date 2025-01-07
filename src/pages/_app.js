import { SessionProvider } from 'next-auth/react';
import Layout from '../Components/Header/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
