import React from 'react'

const ResolutionPreview = ({ previewedSize }) => {
    return (
        <div className='w-3/6 border-r-2 p-5 h-full'>
            <div className=' rounded-md flex justify-center items-center' style={{ aspectRatio: `${previewedSize}/1`, backgroundColor: "#00e6a1" }}>
                <h1 className='text-2xl mb-5 text-white'>Preview</h1>
            </div>
        </div>
    )
}

export default ResolutionPreview