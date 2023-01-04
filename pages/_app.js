import { useRouter } from 'next/router'
import AppLayout from '../AppLayout'
import AppContext from '@/contextapi/AppContext'
import '../styles/globals.css'
import { useState } from 'react'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const [isApiCalling, setIsApiCalling] = useState(false)

  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    setIsApiCalling(true)
    return config
  }, function (error) {
    setIsApiCalling(true)
    // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    setIsApiCalling(false)
    return response
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    setIsApiCalling(false)
    return Promise.reject(error)
  })

  return <AppContext.Provider
    value={{
      state: { isApiCalling },
    }}
  >

    {(pathname === '/' || pathname === '/login') ? <Component {...pageProps} /> : <AppLayout>
      <Component {...pageProps} />
    </AppLayout>}
  </AppContext.Provider>
}

export default MyApp
