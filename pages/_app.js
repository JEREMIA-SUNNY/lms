import AppContext from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <AppContext.Provider
    value={{
      state: {},
    }}
  >
    <Component {...pageProps} />
  </AppContext.Provider>
}

export default MyApp
