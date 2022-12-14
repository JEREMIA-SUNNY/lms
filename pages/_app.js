import { useRouter } from 'next/router'
import AppLayout from '../AppLayout'
import AppContext from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  console.log(pathname)
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
