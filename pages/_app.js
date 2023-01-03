import { useRouter } from 'next/router'
import AppLayout from '../AppLayout'
import AppContext from '@/contextapi/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  return <AppContext.Provider
    value={{
      state: {},
    }}
  >

    {(pathname === '/' || pathname === '/login') ? <Component {...pageProps} /> : <AppLayout>
      <Component {...pageProps} />
    </AppLayout>}
  </AppContext.Provider>
}

export default MyApp
