

const getDefaultValue = (index, item, name) => {
    try {
        item?.videos[index][name]
    } catch (error) {
        return ''
    }
}
const VideoForm = ({ i, index, item, moduleVideoInput }) => {
    return (
        <div className="mt-2 rounded bg-gray-50 p-2">
            <div className="flex justify-between">
                <h6 className="block mb-2 text-sm text-gray-900 font-semibold">Video {i + 1}</h6>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="Videolink" className="block mb-2 text-sm text-gray-900">Video link</label>
                    <input
                        defaultValue={getDefaultValue(i, item, 'Videolink')}
                        onChange={(e) => { moduleVideoInput(e, index) }} type="link" name="Videolink" id={i} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="https://video.exmaple.com" required="" />
                </div>
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm text-gray-900">Title</label>
                    <input
                        defaultValue={getDefaultValue(i, item, 'title')}
                        onChange={(e) => { moduleVideoInput(e, index) }} type="text" name="title" id={i} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="title" required="" />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="description" className="w-full block mb-2 text-sm text-gray-900">Description</label>
                <textarea
                    defaultValue={getDefaultValue(i, item, 'description')}
                    onChange={(e) => { moduleVideoInput(e, index) }} id={i} name="description" rows="2" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
        </div>
    )
}

export default VideoForm