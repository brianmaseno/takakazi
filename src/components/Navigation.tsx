'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Heart, ChevronDown } from 'lucide-react'
import DonateModal from './DonateModal'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about' },
        { name: 'Meet Our Founder', href: '/about/founder' }
      ]
    },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Impact', href: '/impact' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Shop', href: '/shop' },
    { name: 'News', href: '/news' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleDropdownEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setAboutDropdownOpen(true)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false)
    }, 200)
  }, [])

  if (!mounted) return null

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="Taka Kazi Africa Logo" 
              width={100} 
              height={100}
              className="rounded-full"
            />
            {/* <span className="text-sm font-bold text-green-600 dark:text-green-600">
              Taka Kazi Africa
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="flex items-center space-x-1 transition-colors duration-200 font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {aboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Donate Button */}
            <button
              onClick={() => setIsDonateModalOpen(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Heart className="w-4 h-4" />
              <span className="font-medium">Donate</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-white" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-black/80 backdrop-blur-sm rounded-lg mx-4">
            <div className="flex flex-col space-y-3 px-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <Link
                        href={item.href}
                        className="text-white hover:text-green-400 transition-colors duration-200 font-medium py-2 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-green-400 transition-colors duration-200 font-medium py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Donate Button */}
              <button
                onClick={() => {
                  setIsDonateModalOpen(true)
                  setIsOpen(false)
                }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-3 rounded-full transition-all duration-300 mt-4 w-full"
              >
                <Heart className="w-4 h-4" />
                <span className="font-medium">Donate Now</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Donate Modal */}
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />
    </header>
  )
}

export default Navigation
