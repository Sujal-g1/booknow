import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, X } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

import NavDropdown from './NavDropdown'


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)
const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);

// Dynamic shadow class
  const shadowClass = isAnyDropdownOpen 
    ? 'shadow-orange-600/40 shadow-xl'  // Color when dropdown is open
    : 'shadow-white/20 shadow-lg';   // Default color

  const {user} =  useUser()
  const {openSignIn} = useClerk()

  const navigate = useNavigate( )


  return (
    <div className='fixed top-0 left-0 z-100 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>

      {/* logo */}
      <Link to='/' className='max-md:flex-1 '>
    <img src={assets.logo1} alt=""  
    className='lg:w-50 w-35 h-auto'/>
      </Link>

      {/* menu items */}
     <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${shadowClass}
    ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}  
    `}>
      <X 
      onClick={()=> setIsOpen(!isOpen)}
      className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'/>

      <Link onClick={()=>{ scrollTo(0,0) , setIsOpen(false)}}  to='/'>Home</Link>

      <NavDropdown 
          title="Movies" 
          setIsOpen={setIsOpen} 
          setIsAnyDropdownOpen={setIsAnyDropdownOpen}
          items={[
            { label: 'All Movies', path: '/movies' },
            { label: 'Trending', path: '/movies' }
          ]} 
        />

        <NavDropdown 
          title="Theatres" 
          setIsOpen={setIsOpen} 
          setIsAnyDropdownOpen={setIsAnyDropdownOpen}
          items={[
            { label: 'Nearby', path: '/theatres' },
            { label: 'IMAX', path: '/theatres' }
          ]} 
        />

        <NavDropdown 
          title="Releases" 
          setIsOpen={setIsOpen} 
          setIsAnyDropdownOpen={setIsAnyDropdownOpen}
          items={[
            { label: 'Upcoming', path: '/releases' },
            { label: 'New Arrival', path: '/releases' }
          ]} 
        />

        <NavDropdown 
          title="Favourites" 
          setIsOpen={setIsOpen} 
          setIsAnyDropdownOpen={setIsAnyDropdownOpen}
          items={[
            { label: 'Upcoming', path: '/releases' },
            { label: 'New Arrival', path: '/releases' }
          ]} 
        />
      

    
      
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