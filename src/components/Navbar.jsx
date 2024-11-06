// src/components/Navbar.jsx
import { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import classNames from 'classnames'

export const navigation = {
  offense: [
    { name: 'Red', href: '/offense/red' },
    { name: 'Glitch', href: '/offense/glitch' },
    { name: 'Orange', href: '/offense/orange' },
    { name: 'Eagle', href: '/offense/eagle' },
    { name: 'Texas', href: '/offense/texas' },
    { name: 'Celtic', href: '/offense/celtic' },
    { name: 'Mango', href: '/offense/mango' },
    { name: 'Bird', href: '/offense/bird' },
  ],
  defense: [
    { name: 'Yahtzee', href: '/defense/yahtzee' },
    { name: 'Diamond', href: '/defense/diamond' },
  ],
  slob: [
    { name: 'Green', href: '/slob/green' },
  ],
  blob: [
    { name: 'Baseline Inbound', href: '/blob/box' },
  ],
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const isCurrentPath = (path) => location.pathname === path

  return (
    <nav className="bg-[#2a2a2a] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src='logo.png' className='w-12 h-12 bg-[#00c3ff] rounded-lg p-1.5'></img>
            <div>
              <div className="text-white font-bold">Eagles</div>
              <div className="text-[#00c3ff] text-sm">Classroom</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={classNames(
                "text-gray-300 hover:text-white",
                isCurrentPath('/') && "text-white"
              )}
            >
              Home
            </Link>

            {Object.entries(navigation).map(([category, items]) => (
              <Menu as="div" className="relative" key={category}>
                <Menu.Button className="text-gray-300 hover:text-white flex items-center">
                  {category.toUpperCase()}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-[#2a2a2a] rounded-md shadow-lg z-50">
                    {items.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            to={item.href}
                            className={classNames(
                              active ? 'bg-[#404040]' : '',
                              'block px-4 py-2 text-sm text-gray-300 hover:text-white'
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ))}

            <Link 
              to="/more" 
              className={classNames(
                "text-gray-300 hover:text-white",
                isCurrentPath('/more') && "text-white"
              )}
            >
              MORE
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <Transition
          show={isMobileMenuOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={classNames(
                  "text-gray-300 hover:text-white px-3 py-2 rounded-md",
                  isCurrentPath('/') && "bg-[#404040] text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <div className="text-gray-300 px-3 font-medium">
                    {category.toUpperCase()}
                  </div>
                  <div className="pl-6 space-y-2">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm",
                          isCurrentPath(item.href) && "bg-[#404040] text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                to="/more"
                className={classNames(
                  "text-gray-300 hover:text-white px-3 py-2 rounded-md",
                  isCurrentPath('/more') && "bg-[#404040] text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MORE
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  )
}
