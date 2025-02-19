import React from 'react'
import { FacebookLogo, FriendsIcon, HomeIcon, MarketIcon, MassengerIcon, MenuIcon, NotifIcon, PlayIcon, SearchIcon } from '../icons/Index'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import { Link } from 'react-router'

function Header() {
    const logout = useUserStore(state => state.logout)
    const user = useUserStore(state=>state.user)
    console.log(user)
    return (
        <header className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
            {/* Searh bar */}
            <div className='flex-1 flex gap-2 items-center'>
                <FacebookLogo className='w-12' />
                <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
                    <input type="text" className="grow" placeholder="Search" />
                    <SearchIcon className='w-4 opacity-50' />
                </label>
            </div>

            {/* Center Icon Menu */}
            <div className="flex-1 flex gap-2 justify-center">
                <Link
                to ='/'
                className="flex justify-center w-20 hover:border-b-2 hover:border-blue-600">
                    <HomeIcon className='w-1/2 opacity-70' />
                </Link>
                <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-600">
                    <PlayIcon className='w-1/2 opacity-60' />
                </div>
                <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-600">
                    <MarketIcon className='w-1/2 opacity-80' />
                </div>
                <Link 
                to = '/friends'
                className="flex justify-center w-20 hover:border-b-2 hover:border-blue-600">
                    <FriendsIcon className='w-2/3 opacity-70' />
                </Link>
            </div>
            {/* Right Munu + drop down */}
            <div className="flex-1 flex gap-3 justify-end">
                <div className="avatar justify-center items-center">
                    <div className="w-10 rounded-full !flex justify-center items-center 
            bg-gray-300 hover:bg-gray-400">
                        <MenuIcon className="w-5" />
                    </div>
                </div>

                <div className="avatar justify-center items-center">
                    <div className="w-10 rounded-full !flex justify-center items-center 
            bg-gray-300 hover:bg-gray-400">
                        <MassengerIcon className="w-5" />
                    </div>
                </div>

                <div className="avatar justify-center items-center">
                    <div className="w-10 rounded-full !flex justify-center items-center 
            bg-gray-300 hover:bg-gray-400">
                        <NotifIcon className="w-5" />
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 btn-circle">
                        <Avatar className= "w-11 h-11 rounded-full bg-slate-400"
                         menu={true}
                         imgSrc={user.profileImage}
                         />
                        </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link to ='/profile' >Profile</Link></li>
                        <div className="divider my-0"></div>
                        <li onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>


            </div>
        </header>
    )
}

export default Header