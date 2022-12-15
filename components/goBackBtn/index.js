import Router from 'next/router'

const GoBackButton = ({ title }) => {
    return (
        <button onClick={() => Router.back()} type="button" className="flex justify-start items-center py-2 font-medium text-[#419a00]">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#419a00"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" /></svg>
            <span className="ml-1">
                {title}
            </span>
        </button>
    )
}

export default GoBackButton;