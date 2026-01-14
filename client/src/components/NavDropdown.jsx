import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems, Portal } from '@headlessui/react'

const NavDropdown = ({ title, items, setIsOpen , setIsAnyDropdownOpen}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (state) => {
    if (state) {
      setIsHovered(true);
      setIsAnyDropdownOpen(true);
    } else {
      // Small delay prevents flickering when moving from button to menu
      setTimeout(() => {
        setIsHovered(false);
        setIsAnyDropdownOpen(false);
      }, 50); 
    }
  };
  return (
    <Menu as="div" className="relative inline-block ">
      {/* Wrapper to handle hover state */}
      <div 
        onMouseEnter={() => handleHover(true)} 
      onMouseLeave={() => handleHover(false)}
        className="py-2" 
      >
        <MenuButton className='focus:ring-0 focus:outline-none cursor-pointer transition-colors '>
          {title}
        </MenuButton>

        <Portal>
          {isHovered && (
            <MenuItems
              static
              transition
              anchor="bottom start"
              // Keep menu open when hovering the dropdown itself
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="z-110 mt-2 w-55  origin-top-right rounded-md outline-none transition data-closed:scale-95 data-closed:opacity-0 backdrop-blur bg-white/10 border border-white/10  shadow-white/20 shadow-lg "
            >
              <div className="py-4">
                {items.map((item, index) => (
                  <MenuItem key={index}>
                    <Link 
                      to={item.path}
                      onClick={() => { 
                        window.scrollTo(0,0); 
                        setIsOpen(false); // Closes mobile menu
                        setIsHovered(false); // Closes dropdown
                      }}
                      className="block px-4 py-2 text-lg text-white hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          )}
        </Portal>
      </div>
    </Menu>
  );
};

export default NavDropdown;