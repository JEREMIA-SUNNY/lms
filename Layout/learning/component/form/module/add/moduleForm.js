import VideoForm from "./videoForm"

const ModuleForm = ({ item, handleModuleName, IsAssessment, index, ModuleFieldValue, moduleVideos, setModuleVideos }) => {

    return (
        <div className="mt-2">
            <div className="mt-4 flex gap-4">
                <div className="w-1/2">
                    <label htmlFor="modulename" className="block mb-2 text-sm font-semibold text-textSecondary">Module name</label>
                    <input onChange={handleModuleName} defaultValue={item?.modulename || ''} type="text" name="modulename" id={index} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder={`Rename Module ${index + 1} to Name`} required="" />
                </div>
                <div className="w-1/4">
                    <div>
                        <label htmlFor="module" className="block mb-2 text-sm font-semibold text-textSecondary">No. of Videos</label>
                        <div className="flex justify-between items-center">
                            <input defaultValue={item?.totalVideos} onChange={(e) => {
                                if (e.target.value < 0) {
                                    e.target.value = 1
                                } else {
                                    ModuleFieldValue(e)
                                }
                            }} type="number" name="totalVideos" id={index} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="1" required="" />
                        </div>
                    </div>
                </div>
                {IsAssessment ? <div className="w-1/4">
                    <div>
                        <label htmlFor="cutOfScore" className="block mb-2 text-sm font-semibold text-textSecondary">Cut-off Score (%)</label>
                        <div className="flex justify-between items-center">
                            <input defaultValue={item?.cutOfScore}
                                onChange={(e) => {
                                    if (e.target.value < 0) {
                                        e.target.value = 1
                                    } else {
                                        ModuleFieldValue(e)
                                    }
                                }}
                                type="number" name="cutOfScore" id={index} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="1" required="" />
                        </div>
                    </div>
                </div> : ''}

            </div>
            <div className="mt-4">
                <label htmlFor="module-description" className="w-full block mb-2 text-sm text-textSecondary">Module Description</label>
                <textarea onChange={ModuleFieldValue} defaultValue={item['module-description']} id={index} name="module-description" rows="1" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>

            <VideoForm
                formData={moduleVideos}
                setFormData={setModuleVideos}
            />

        </div>
    )
}

export default ModuleForm;
