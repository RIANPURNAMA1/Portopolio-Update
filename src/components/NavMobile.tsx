import { Contact, Home, Laptop, User } from 'lucide-react'
import React from 'react'

const NavMobile : React.FC = () =>  {
  return (
    <div>
         <div className="md:hidden  transition duration-600 ease-in-out">
          <nav className="bg-black text-white z-50 backdrop-blur-lg bg-transparent opacity-90 rounded-md px-2 sm:px-4 py-2.5 flex justify-start mt-3 fixed top-[70px]  right-2 w-[40%]  leading-8" style={{height: 'max-content'}}>
            <ul>
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-300 flex gap-2 items-center justify-between"
                >
                  Home <Home />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 flex items-center gap-2 justify-between"
                >
                  About <User />
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="hover:text-gray-300 flex items-center gap-2 justify-between"
                >
                  Project <Laptop />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 flex items-center gap-2 justify-between"
                >
                  Contact <Contact />
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default NavMobile
