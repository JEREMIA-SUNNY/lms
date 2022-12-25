
const ModuleForm = ({ item, handleModuleName, index, ModuleFieldValue, moduleVideoInput, courseInfo }) => {

    return (
        <div className="mt-2">
            <div className="mt-4 flex gap-4">
                <div className="w-1/2">
                    <label htmlFor="modulename" className="block mb-2 text-sm font-semibold text-gray-900">Module name</label>
                    <input onChange={handleModuleName} defaultValue={item?.modulename || ''} type="text" name="modulename" id={index} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder={`Rename Module ${index + 1} to Name`} required="" />
                </div>
                {courseInfo.IsAssessment ? <div className="w-1/4">
                    <div>
                        <label htmlFor="cutOfScore" className="block mb-2 text-sm font-semibold text-gray-900">Cut of score</label>
                        <div className="flex justify-between items-center">
                            <input defaultValue={item?.cutOfScore}
                                onChange={(e) => {
                                    if (e.target.value < 0) {
                                        e.target.value = 1
                                    } else {
                                        ModuleFieldValue(e)
                                    }
                                }}
                                type="number" name="cutOfScore" id={index} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="1" required="" />
                        </div>
                    </div>
                </div> : ''}
                <div className="w-1/4">
                    <div>
                        <label htmlFor="module" className="block mb-2 text-sm font-semibold text-gray-900">Total Videos</label>
                        <div className="flex justify-between items-center">
                            <input defaultValue={item?.totalVideos} onChange={(e) => {
                                if (e.target.value < 0) {
                                    e.target.value = 1
                                } else {
                                    ModuleFieldValue(e)
                                }
                            }} type="number" name="totalVideos" id={index} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="1" required="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="module-description" className="w-full block mb-2 text-sm text-gray-900">Description</label>
                <textarea onChange={ModuleFieldValue} defaultValue={item['module-description']} id={index} name="module-description" rows="1" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
            {
                Array.from(Array(Number(item?.totalVideos || 1)).keys())?.map((item, i) => {
                    return (
                        <div key={i} className="mt-2 rounded bg-gray-50 p-2">
                            <div className="flex justify-between">
                                <h6 className="block mb-2 text-sm text-gray-900 font-semibold">Video {i + 1}</h6>
                                {/* <div className="flex items-center">
                                    <button type="button" className="mr-2 text-gray-700 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        <span className="sr-only">Icon description</span>
                                    </button>

                                </div> */}
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="Videolink" className="block mb-2 text-sm text-gray-900">Video link</label>
                                    <input onChange={(e) => { moduleVideoInput(e, index) }} type="link" name="Videolink" id={i} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="https://video.exmaple.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm text-gray-900">Title</label>
                                    <input onChange={(e) => { moduleVideoInput(e, index) }} type="text" name="title" id={i} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="title" required="" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="description" className="w-full block mb-2 text-sm text-gray-900">Description</label>
                                <textarea onChange={(e) => { moduleVideoInput(e, index) }} id={i} name="description" rows="2" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ModuleForm;
