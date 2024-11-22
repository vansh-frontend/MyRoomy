import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiHome, FiMap, FiDollarSign, FiKey, FiMail } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      // When drawer opens
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px' // Prevent layout shift
    } else {
      // When drawer closes
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isMenuOpen])

  const handleToggleMenu = (state) => {
    setIsMenuOpen(state)
  }

  const navLinks = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Properties', path: '/properties', icon: FiMap },
    { name: 'Buy', path: '/buy', icon: FiDollarSign },
    { name: 'Rent', path: '/rent', icon: FiKey },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#1A1A1A]">
                My<span className="text-blue-600">Roomy</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-600 hover:text-[#1A1A1A] transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-[#1A1A1A] transition-colors font-medium">
                Sign In
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-black transition-colors font-medium">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => handleToggleMenu(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <FiMenu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => handleToggleMenu(false)}
        aria-hidden="true"
      >
        {/* Side Drawer */}
        <div
          className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-xl 
            transition-transform duration-300 ease-in-out transform overflow-y-auto
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="sticky top-0 flex items-center justify-between p-4 border-b border-gray-100 bg-white">
            <span className="text-xl font-bold text-[#1A1A1A]">Menu</span>
            <button
              onClick={() => handleToggleMenu(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <FiX className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="py-4">
            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                  onClick={() => handleToggleMenu(false)}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="mt-6 px-4 space-y-3">
              <button className="w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-left">
                Sign In
              </button>
              <button className="w-full px-4 py-2.5 bg-[#1A1A1A] text-white rounded-lg hover:bg-black transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header