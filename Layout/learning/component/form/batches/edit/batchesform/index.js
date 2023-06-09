import FilterButtonTab from "components/FilterButtonTab";
import SelectInput from "components/SelectInput"

const language = [
    { name: 'hindi', title: 'Hindi' },
    { name: 'english', title: 'English' },
    { name: 'Panjabi', title: 'Panjabi' },
    { name: 'Maradhi', title: 'Maradhi' }

]

const BatchesForm = (props) => {
    const { handlebatchInfo, IsBatchePaid,
        setIsBatchePaid } = props

    return (
        <div>
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div>
                    <label htmlFor="batchname" className="block mb-2 text-sm font-semibold text-textSecondary">Batch name</label>
                    <input onChange={handlebatchInfo} type="name" name="batchname" id="batchname" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Batch name" required="" />
                </div>
                <div>
                    <label htmlFor="language" className="block mb-2 text-sm font-semibold text-textSecondary">Language</label>
                    <SelectInput onChange={handlebatchInfo} name='language' id='language' dropdowns={language} />
                </div>
                <div>
                    <label htmlFor="batchType" className="block mb-2 text-sm font-semibold text-textSecondary">Batch type ( Paid/ Free )</label>
                    <FilterButtonTab
                        tabs={['Yes', 'No',]}
                        setSelectedtab={setIsBatchePaid}
                        selectedTab={IsBatchePaid}
                    />
                    
                </div>
                {IsBatchePaid === 'Yes' ? <div>
                    <label htmlFor="Price" className="block mb-2 text-sm font-semibold text-textSecondary">Price</label>
                    <input
                        onChange={(e) => {
                            if (e.target.value < 0) {
                                e.target.value = 1
                            } else {
                                handlebatchInfo(e)
                            }
                        }}
                        type="number" name="Price" id="Price" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Price" required="" />
                </div> : ''}
                <div>
                    <label htmlFor="capacity" className="block mb-2 text-sm font-semibold text-textSecondary">Capacity</label>
                    <input onChange={(e) => {
                        if (e.target.value < 0) {
                            e.target.value = 1
                        } else {
                            handlebatchInfo(e)
                        }
                    }} type="number" name="capacity" id="capacity" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="capacity" required="" />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="description" className="w-full block mb-2 text-sm font-semibold text-textSecondary">Description</label>
                <textarea onChange={handlebatchInfo} id="description" name="description" rows="2" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
        </div>
    )
}

export default BatchesForm