import React from 'react'
import MenuItem from './MenuItem'
import { DropdownArrow, FriendsIcon, GroupIcon, HomeIcon, MarketIcon, MemoriesIcon, MoreIcon, PlayIcon, SaveIcon } from '../icons/Index'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import { Link } from 'react-router'

function SidebarMenu() {
  const user = useUserStore(state=> state.user)
  return (
    <div className='fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px] rounded-lg 
    max-xl:w-[220px] max-lg:hidden'>
      <Link to='/profile'>
      <MenuItem icon={Avatar} text= {`${user.firstName} ${user.lastName}`}
       className = "w-11 h-11 rounded-full bg-slate-200"
       imgSrc={user.profileImage}
       />
       </Link>
       <Link to='/friends'>
      <MenuItem icon={FriendsIcon} text="Friends" className='w-11'/>
      </Link>
      <MenuItem icon={MemoriesIcon} text="Memories" className='w-8 me-3'/>
      <MenuItem icon={SaveIcon} text="Saved" className='w-10'/>
      <MenuItem icon={GroupIcon} text="Groups" className='w-10'/>
      <MenuItem icon={PlayIcon} text="Video" className='w-10'/>
      <MenuItem icon={MarketIcon} text="Marketplace" className='w-10'/>
      <MenuItem icon={MoreIcon} text="More..." 
      className='w-11 p-2 border border-gray-500 rounded-full '/>
      </div>
  )
}

export default SidebarMenu