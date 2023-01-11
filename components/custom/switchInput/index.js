import { Switch } from '@headlessui/react'

const SwitchInput = ({ value, onChange }) => {

    return (
        <Switch
            checked={value}
            onChange={onChange}
            className={`${value ? 'bg-green-600' : 'bg-gray-200'}
  relative inline-flex h-[26px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${value ? 'translate-x-9 border-2 border-[#419a00]' : 'translate-x-0 bg-gray-500'}
    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    )
}


export default SwitchInput