import {AiFillHome, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineHeart} from 'react-icons/ai'
import {HiOutlineLibrary} from 'react-icons/hi'
import {BiRss} from 'react-icons/bi'
function Sidebar(){
    return(
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
            <div className='space-y-2'>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <AiFillHome className='h-5 w-5'/>
                    <p>Home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <AiOutlineSearch className='h-5 w-5'/>
                    <p>Search</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HiOutlineLibrary className='h-5 w-5'/>
                    <p>Your Library</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-900'/>

                <button className='flex items-center space-x-2 hover:text-white'>
                    <AiOutlinePlusCircle className='h-5 w-5'/>
                    <p>Create Playlist</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <AiOutlineHeart className='h-5 w-5'/>
                    <p>Liked Songs</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <BiRss className='h-5 w-5'/>
                    <p>Your Episodes</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-900'/>

                {/* Playlist */}
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
                <p className='hover:text-white cursor-pointer'>Playlist Name...</p>
            </div>
        </div>
    )
}

export default Sidebar