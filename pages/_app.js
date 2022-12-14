import AppLayout from '../AppLayout'
import AppContext from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <AppContext.Provider
    value={{
      state: {},
    }}
  >
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </AppContext.Provider>
}

export default MyApp
