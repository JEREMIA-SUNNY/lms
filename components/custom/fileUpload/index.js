import Image from 'next/image';
import React, { useState } from 'react';

function FileUploader({ handlefile }) {
    const [previewUrl, setPreviewUrl] = useState("")

    const handleFile = (e) => {
        try {
            const file = e.target.files[0];
            setPreviewUrl(URL.createObjectURL(file));
            handlefile(file)
        } catch (error) {
            setPreviewUrl('')
        }

    }

    return (
        <div className='flex items-center justify-between'>
            <div className="my-2 w-[400px] flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-38 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-green-50 hover:bg-green-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-green-500 dark:text-green-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-green-500 dark:text-green-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input onChange={handleFile} id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>
            {previewUrl ? <div className='ml-4 w-[140px] h-[140px]'>
                <Image
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-40 rounded-lg w-full object-cover object-center"
                    height={100}
                    width={100}
                    quality={100}
                    loading="eager" priority={true}
                    src={previewUrl}
                    alt="Sample image"
                />
            </div> : ''}
        </div>

    );
}

export default FileUploader;
