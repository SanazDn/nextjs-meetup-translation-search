import Layout from '../components/layout/Layout';
import '../styles/globals.css';
// pages/_app.js
import { appWithTranslation } from 'next-i18next';
import '../i18n'; // Adjust the path based on your actual file location
 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

export default appWithTranslation(MyApp);









