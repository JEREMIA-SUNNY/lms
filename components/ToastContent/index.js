
import IconButton from 'components/custom/Buttons/IconButton'
import { Fragment } from 'react'

const ToastContent = ({ title, text, icon, type }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <IconButton>
                    {icon}
                </IconButton>
                <h6 className='toast-title font-weight-bold'>{title}</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>{text}</span>
        </div>
    </Fragment>
)

export default ToastContent