import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserStore from '../stores/userStore'
import { ActivityIcon, PhotoIcon, VideoIcon } from '../icons/Index'
import PostForm from './PostForm'

function CreatePost() {
    const user = useUserStore(state=>state.user)
    const [isOpen, setIsopen] = useState(false)
    const closePostForm = ()=>{
      setIsopen(false)
      document.getElementById('postform-modal').close()}
  return (
    <>
    <div className='card bg-base-100 shadow-xl'>
        <div className="card-body p-6">
          <div className="flex gap-2">
            <Avatar className='w-11 h-11 rounded-full'
            imgSrc={user.profileImage}
            />
            <button className='btn flex-1 rounded-full justify-start'
            onClick={()=>{
                setIsopen(true)
                document.getElementById('postform-modal').showModal()}}
            >
                What's in your mind ?
            </button>
          </div>
          <div className="divider mt-1 mb-0"></div>
          <div className="flex gap-3 justify-between">
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 ">
                <VideoIcon className='w-6'/>
                Live /Stream
            </div>
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 ">
                <PhotoIcon className='w-7'/>
                Photo / Video
            </div>
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 ">
                <ActivityIcon className ='w-7'/>
                Activity
            </div>
          </div>
        </div>
    </div>
    <dialog id="postform-modal" className="modal">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={closePostForm}
                    >✕</button>
                    {isOpen && <PostForm closePostForm= {closePostForm}/>}

                </div>
            </dialog>
    </>
  )
}

export default CreatePost