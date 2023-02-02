import Modal from 'components/Modal';
import { formatDate } from 'utils/datetime'

const CandidateInfoCard = ({ item }) => {
    return (
        <div className="shadow-lg rounded-lg bg-white p-3">
            <div className="flex justify-start items-center">
                <div className="inline-flex overflow-hidden relative justify-center items-center border-2 border-gray-100 w-10 h-10 bg-gray-100 rounded-full">
                    <span className="font-medium text-gray-600">{item.name[0]}</span>
                </div>
                <div className="ml-2 h-10">
                    <p className=" text-sm text-gray-900 font-medium title-font truncate">{item?.name}</p>
                    <div className="text-xs flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-red-500">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <p className="ml-1 text-gray-500">Noida, Uttar Pradesh , India </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex flex-col items-start ">
                    <p className="text-xs">
                        Possiton
                    </p>
                    <p className="capitalize text-gray-500 text-xs">
                        {item?.position_applied}
                    </p>
                </div>
                <div className="flex flex-col items-start ">
                    <p className="text-xs">
                        Applied On
                    </p>
                    <p className="capitalize text-gray-500 text-xs">
                        {formatDate(new Date(item?.date_applied), 'dd/mm/yyyy')}
                    </p>
                </div>
                <div className="flex flex-col items-start ">
                    <p className="text-xs">
                        Phone
                    </p>
                    <p className="capitalize text-gray-500 text-xs">
                        {item?.phone}
                    </p>
                </div>
                <div className="flex flex-col items-start ">
                    <p className="text-xs">
                        Email
                    </p>
                    <a href={`mailto:${item?.email}`} className="text-xs text-gray-500">{item?.email}</a>
                </div>
            </div>
            <div className="flex flex-col items-start mt-2">
                <p className="text-xs">
                    Cover letter
                </p>
                <div className='w-full flex justify-start'>
                    <div className='w-[80%] flex justify-start items-center '>
                        <p className="text-xs text-gray-500 truncate ">{item?.cover_letter}</p>
                    </div>
                    <Modal
                        classTitleIcon="p-0 ml-0"
                        ui={<div className="mt-2 w-full h-[80vh]">
                            <p className='py-6'> {item?.cover_letter}</p>
                        </div>}
                        title={`${item?.name} | Cover letter`}
                        TitleIcon={<span className='text-green-600 text-xs p-0 m-0 flex items-center'>Read more</span>} />
                </div>

            </div>
            {/* <div className="my-2">
                <hr />
            </div>
            <div className="mt-4 grid gap grid-cols-3">
                <button type="button" className={`bg-gray-100 h-8 justify-center  mx-1 focus:ring-0 focus:outline-none font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center`}>
                    Decline
                </button>
                <button type="button" className={`bg-green-600 rounded-md text-sm p-2 h-8 text-white flex justify-center  mx-1 focus:ring-0 focus:outline-none font-medium text-center items-center`}>
                    Accept
                </button>
                <a target="_blank" href={item?.resume} type="button" className={`border border-green-600 rounded-md text-sm p-2 h-8 text-green-600 flex justify-center  mx-1 focus:ring-0 focus:outline-none font-medium text-center items-center`}>
                    Resume
                </a>
            </div> */}
        </div>
    )
}

export default CandidateInfoCard;