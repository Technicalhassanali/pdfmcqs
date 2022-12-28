import '../styles/globals.css'
import '../styles/prism.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{"position":"relative"}}>
        <Navbar />
        <div className='container'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
