import SessionForm from "./sessionForm"


const BatchSession = ({ batchSession, setBatchSession }) => {
    const addSection = () => {
        setBatchSession([...batchSession, {}])
    }

    const rmSection = () => {
        setBatchSession(batchSession.slice(0, -1))
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h6 className="block mb-2  text-textSecondary font-semibold">Sessions</h6>
                <div className="flex justify-start items-center">
                    <button onClick={rmSection} type="button" className="mr-2 text-textSecondary border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <span className="sr-only">Icon remove</span>
                    </button>
                    <button onClick={addSection} type="button" className="mr-2 text-textSecondary border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <span className="sr-only">Icon add</span>
                    </button>
                </div>
            </div>
            {
                batchSession?.map((item, i) => {
                    return (
                        <SessionForm setBatchSession={setBatchSession} batchSession={batchSession} index={i} item={item} key={i} />
                    )
                })
            }
        </div>
    )
}

export default BatchSession