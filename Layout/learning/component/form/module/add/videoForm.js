
import IconButton from 'components/custom/Buttons/IconButton';
import React, { useState } from 'react';

const VideoForm = () => {
  const [formData, setFormData] = useState([{ id: 1, name: '', videoLink: '', description: '' }]);

  const handleAdd = () => {
    setFormData([...formData, { id: formData.length + 1, name: '', videoLink: '', description: '' }]);
  };

  const handleDelete = (id) => {
    setFormData(formData.filter((item) => item.id !== id));
  };

  const handleChange = (event, id) => {
    const newFormData = formData.map((item) => {
      if (item.id === id) {
        item[event.target.name] = event.target.value;
      }
      return item;
    });
    setFormData(newFormData);
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between mt-4'>
        <h4>Videos </h4>
        <IconButton className='text-white bg-green-600' onClick={handleAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </IconButton>
      </div>
      <div className="flex flex-col">
        {formData.map((item) => (
          <div className="mt-2 rounded bg-gray-50 p-2">
            <div className="flex justify-between">
              <h6 className="block mb-2 text-sm text-gray-900 font-semibold">Video {item?.id}</h6>
              <IconButton onClick={() => handleDelete(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </IconButton>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="Videolink" className="block mb-2 text-sm text-gray-900">Video link</label>
                <input
                  onChange={(event) => handleChange(event, item.id)}
                  type="link" name="Videolink"
                  value={item.videoLink}
                  className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="https://video.exmaple.com" required="" />
              </div>
              <div>
                <label htmlFor="title" className="block mb-2 text-sm text-gray-900">Title</label>
                <input
                  value={item.name}
                  name='name'
                  onChange={(event) => handleChange(event, item.id)}
                  type="text"
                  className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="title" required="" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="description" className="w-full block mb-2 text-sm text-gray-900">Description</label>
              <textarea
                name="description"
                rows="2"
                className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoForm;
