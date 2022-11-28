/**
 * initialize pages 
 */

import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/task.css";
import SSRProvider from 'react-bootstrap/SSRProvider';

// NavBar to be on every page
function MyApp({ Component, pageProps }) {
  return (
    <div className='logo'>
    <SSRProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </SSRProvider>
    </div>
  );
};


export default MyApp
