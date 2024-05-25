import React from 'react'
import cn from 'mxcn'

function Divider({className}: {className?: string}) {
    return (
        <div
            className={cn('bg-[#2D343A] h-[1px] w-full', className)}
        ></div>
    )
}

export default Divider