import ListChipWithMore from 'components/ListChipWithMore';
import { formatDate } from 'utils/datetime'

const CandidateInfoCard = ({ item }) => {
    return (
        <div className="shadow-lg rounded-lg bg-white">
            <div className="relative flex justify-between">
                <div className="flex justify-start items-center p-3">
                    <div className="ml-2 h-10 text-left">
                        <p className=" text-sm text-gray-900 font-medium title-font truncate">{item?.name}</p>
                        <div className="text-xs flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-red-500">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <p className="ml-1 text-gray-500">Noida, Uttar Pradesh , India </p>
                        </div>
                    </div>
                </div>
                <button className={`h-6 ${item['status'] ? 'bg-[#409a00] text-white' : 'bg-gray-200 text-gray-500'} text-xs mx-2 px-2 py-1 rounded-b-lg`}>
                    Applied
                </button>
            </div>

            <div className="w-full px-4 pb-4">
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex flex-col items-start ">
                        <p className="text-sm">
                            Possiton
                        </p>
                        <p className="capitalize text-gray-500 text-sm">
                            {item?.position_applied}
                        </p>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="text-sm">
                            Applied On
                        </p>
                        <p className="capitalize text-gray-500 text-sm">
                            {formatDate(new Date(item?.date_applied), 'dd/mm/yyyy')}
                        </p>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="text-sm">
                            Qualification
                        </p>
                        <p className="capitalize text-gray-500 text-sm">
                            B Tech
                        </p>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="text-sm">
                            Experience
                        </p>
                        <a href={`mailto:${item?.Experience}`} className="text-sm text-gray-500">{item?.Experience}</a>
                    </div>
                </div>
                <div className="mt-2 flex justify-start items-center">
                    <p className="text-sm text-gray-500">
                        Skills
                    </p>
                    <ListChipWithMore list={item?.Skills.split(',')} row={1} />
                </div>
                <div className="flex justify-start items-start">
                    <p className="text-sm text-gray-500">
                        Technology
                    </p>
                    <ListChipWithMore list={item?.Technology.split(',')} row={1} />
                </div>
            </div>
        </div>
    )
}

export default CandidateInfoCard;