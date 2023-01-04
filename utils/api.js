import axios from "axios"

// ** Toaster 
import ToastContent from "@/components/ToastContent"
import { Slide, toast } from 'react-toastify'

const AlertError = (text) => {

    return toast.error(
        <ToastContent type={'light-danger'} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        } text={typeof text === 'object' ? 'Something is wrong Please  try on more time ' : text} title={'Fail :('} />,
        { transition: Slide, hideProgressBar: true, autoClose: 4000 }
    )
}

const AlertSuccess = (text) => {
    return toast.success(
        <ToastContent type={'success'} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        } text={text} title="Success !" />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
    )
}

// ** MakeProtectedApiCall( "url " , "request method " , "headers " , "payload " )
export const MakeProtectedApiCall = async (apiPath, method, header, bodyData = {}) => {
    switch (method.toLowerCase()) {
        case "get":
            try {
                const res = await axios.get(apiPath, { headers: { ...header } })
                return res
            } catch (error) {
                const msg = error.response?.data?.msg
                AlertError(msg)
                toast.clearWaitingQueue()
                if (error.response?.status === 401) {
                    localStorage.clear()
                    window.location.href = '/login'
                }
                return { status: error.response?.status }
            }
            break
        case "post":
            try {
                const res = await axios.post(apiPath, bodyData, { headers: { ...header } })
                AlertSuccess(res.data?.data?.msg || res.data.msg)
                return res
            } catch (error) {
                const msg = error.response?.data?.msg
                AlertError(msg)
                toast.clearWaitingQueue()
                if (error.response?.status === 401) {
                    localStorage.clear()
                    window.location.href = '/login'
                }
                return { status: error.response?.status }
            }
            break
        case "put":
            try {
                const res = await axios.put(apiPath, bodyData, { headers: { ...header } })
                AlertSuccess(res.data?.data?.msg || res.data.msg)
                return res
            } catch (error) {
                const msg = error.response?.data?.msg
                AlertError(msg)
                toast.clearWaitingQueue()
                if (error.response?.status === 401) {
                    localStorage.clear()
                    window.location.href = '/login'
                }
                return { status: error.response?.status }
            }
            break
        case "patch":
            try {
                const res = await axios.patch(apiPath, bodyData, { headers: { ...header } })
                AlertSuccess(res.data?.data?.msg || res.data.msg)
                return res
            } catch (error) {
                const msg = error.response?.data?.msg
                AlertError(msg)
                toast.clearWaitingQueue()
                if (error.response?.status === 401) {
                    localStorage.clear()
                    window.location.href = '/login'
                }
                return { status: error.response?.status }
            }
            break
        case "delete":
            try {
                const res = await axios.delete(apiPath, { headers: header, data: bodyData })
                AlertSuccess(res.data?.data?.msg || res.data.msg)
                return res
            } catch (error) {
                const msg = error.response?.data?.msg
                AlertError(msg)
                toast.clearWaitingQueue()
                if (error.response?.status === 401) {
                    localStorage.clear()
                    window.location.href = '/login'
                }
                return { status: error.response?.status }
            }
            break
        default:
            break
    }
}
