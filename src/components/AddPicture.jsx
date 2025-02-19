import React from 'react'
import { AddPicIcon } from '../icons/Index'

function AddPicture(props) {
    const{file, setfile} = props
  return (
    <div className="flex flex-col p-2 border rounded-lg">
        <div className="bg-slate-100 hover:bg-slate-200 min-h-40 
        rounded-lg relative cursor-pointer"
        onClick={()=>document.getElementById('input-file').click()}
        >
            <input type='file' className='opacity-0' id='input-file'/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <AddPicIcon className='w-11 opacity-60'/>
            </div>
        </div>
    </div>
  )
}

export default AddPicture