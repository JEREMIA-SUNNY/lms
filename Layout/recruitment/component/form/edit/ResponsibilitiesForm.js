


const Responsibilities = ({ responsibilities, setResponsibilities }) => {
    const addResposibiliy = () => {
        setResponsibilities([...responsibilities, {}])
    }

    const rmResponse = () => {
        setResponsibilities(responsibilities.slice(0, -1))
    }

    return (
        <div className="mt-2">
            <div className="flex justify-between items-center">
                <h6 className="block mb-2  text-gray-900 font-semibold">Job Responsibilities</h6>
                <div className="flex justify-start items-center">
                    <button onClick={rmResponse} type="button" className="mr-2 text-gray-700 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <span className="sr-only">Icon remove</span>
                    </button>
                    <button onClick={addResposibiliy} type="button" className="mr-2 text-gray-700 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <span className="sr-only">Icon add</span>
                    </button>
                </div>
            </div>
            {
                responsibilities?.map((item, i) => {
                    return (
                        <input key={i} type="text" title="Responsibility" id={`Responsibility-${i}`} className="mt-2 outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Job Responsibility" required="" />
                    )
                })
            }
        </div>
    )
}

export default Responsibilities