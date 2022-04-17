import React from 'react'
import Transform3d from './Transform3d'
import TransformPosition from './TransformPosition'

const Transformer = () => {


    return (
        <div className="h-5/6 w-11/12 mt-10 rounded-lg">
            <TransformPosition />
            <Transform3d />
        </div>
    )
}

export default Transformer