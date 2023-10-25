import '@/styles/globals.css'
import Navebar from '@/components/Navebar'
export default function App({ Component, pageProps }) {
  return <>
  <Navebar/>
  <Component {...pageProps} />
  </>
}
