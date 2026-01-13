import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, X } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

import { Menu, MenuButton, MenuItem, MenuItems , Portal } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {user} =  useUser()
  const {openSignIn} = useClerk()

  const navigate = useNavigate( )


  return (
    <div className='fixed top-0 left-0 z-[100] w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>

      {/* logo */}
      <Link to='/' className='max-md:flex-1 '>
    <img src={assets.logo1} alt=""  
    className='lg:w-50 w-35 h-auto'/>
      </Link>

      {/* menu items */}
     <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 
    ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}  
    `}>
      <X 
      onClick={()=> setIsOpen(!isOpen)}
      className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'/>

      <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/'>Home</Link>

      <Menu as="div" className="relative inline-block">
      <MenuButton className='focus:ring-0 focus:outline-none'> Movies </MenuButton>

      <Portal>
      <MenuItems
        transition
        anchor="bottom"
        className="absolute right-0 z-10 mt-4 w-60  origin-top-right rounded-md outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in backdrop-blur bg-white/20   "
      >
        <div className="py-4">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-white data-focus:text-white data-focus:outline-hidden dark:text-white  dark:data-focus:bg-white/5 dark:data-focus:text-white"
            >
            <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/movies'>Movies</Link>
            </a>
          </MenuItem>

            <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-white data-focus:text-white data-focus:outline-hidden dark:text-white  dark:data-focus:bg-white/5 dark:data-focus:text-white"
            >
            <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/movies'>Movies</Link>
            </a>
          </MenuItem>

            <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-white data-focus:text-white data-focus:outline-hidden dark:text-white  dark:data-focus:bg-white/5 dark:data-focus:text-white"
            >
              <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/movies'>Movies</Link>
            </a>
          </MenuItem>

            <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-white data-focus:text-white data-focus:outline-hidden dark:text-white  dark:data-focus:bg-white/5 dark:data-focus:text-white"
            >
            <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/movies'>Movies</Link>
            </a>
          </MenuItem>
         
          
        
        </div>
      </MenuItems>
      </Portal>
    </Menu>

      <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/'>Theaters </Link>
      <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/'>Releases</Link>
      <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/favourite'>Favourites</Link>

      
     </div>

      {/* search and sign */}

      <div className='flex items-center gap-8'>
      <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
      {
         !user ? (
      <button
      onClick={openSignIn}
      className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer '
      >Log in</button>
         ) : 
        (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} 
              onClick={()=> navigate('/my-bookings')} />
            </UserButton.MenuItems>
          </UserButton>
        )
      }
     
      </div>

    {/* menu icon */}
     <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer'
     onClick={()=> setIsOpen(!isOpen)} />

    </div>
  )
}

export default Navbar