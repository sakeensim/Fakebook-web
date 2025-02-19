import React from 'react'
import { SearchIcon } from '../icons/Index'
import MenuItem from './MenuItem'
import Avatar from './Avatar'

function SidebarContact() {
  return (
    <div className='fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2 max-xl:hidden'>
      <div className="flex justify-between opacity-50">
        <span>contact</span>
        <div className="flex gap-2">
          <SearchIcon className="w-6" />
          ...
        </div>
      </div>
      <MenuItem 
      icon={Avatar}
      text="Puma Codecamp"
      className="w-11 h-11 rounded-full bg-slate-200"
      imgSrc="https://www.svgrepo.com/show/420360/avatar-batman-comics.svg"
      />
      <MenuItem 
      icon={Avatar}
      text="Nike Codecamp"
      className="w-11 h-11 rounded-full bg-slate-200"
      imgSrc="https://www.svgrepo.com/show/420316/indian-man-sikh.svg"
      />
      <MenuItem 
      icon={Avatar}
      text="Adidas Codecamp"
      className="w-11 h-11 rounded-full bg-slate-200"
      imgSrc ="https://www.svgrepo.com/show/420317/artist-avatar-marilyn.svg"
      />
      </div>
  )
}

export default SidebarContact