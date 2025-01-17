import { PresentationChartBarIcon, Cog6ToothIcon, PowerIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
export default function SimpleNavbar() {
  const [isDropdownOpen, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setOpenMenu(!isDropdownOpen);
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="bg-[#D9D0C1]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className={`relative transition-all inline-flex font-bold items-center justify-center rounded-md p-2 text-[#40251B] hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] ${isOpen ? 'bg-[#40251B] text-[#D9D0C1]' : ''}`}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>


                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12" />
                </svg>


              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md hover:bg-[#40251B] focus:bg-[#40251B] px-3 py-2 text-sm hover:text-[#D9D0C1] focus:text-[#D9D0C1] text-[#40251B] font-bold flex justify-between transition-all sm:hidden"
                    aria-current="page"
                  >
                    <PresentationChartBarIcon className="h-5 w-5" />
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-[#40251B] p-1 text-[#D9D0C1] hover:text-[#D9D0C1] focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-brown-300 transition-all"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>

              <div className="relative ml-2">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full border-double border-2 border-brown-600 ring-offset-white  text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#D9D0C1] transition-all"
                    aria-expanded={isDropdownOpen}
                    onClick={toggleDropdown}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="" />
                  </button>
                </div>
                {isDropdownOpen && (
                  <motion.div
                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline font-bold text-[#40251B]`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}

                  >
                    <a
                      href="#"
                      className="flex hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] rounded-md  items-center gap-x-2 px-4 py-2 text-sm transition-all"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      <UserCircleIcon className="h-5 w-5" />
                      Profile
                    </a>
                    <a
                      href="#"
                      className="flex hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] rounded-md  items-center gap-x-2 px-4 py-2 text-sm transition-all"
                      role="menuitem"
                      id="user-menu-item-1"
                    >
                      <Cog6ToothIcon className="h-5 w-5" />
                      Settings
                    </a>
                    <Link to="/login">
                      <a
                        className="flex hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] rounded-md  items-center gap-x-2 px-4 py-2 text-sm transition-all"
                        role="menuitem"
                        id="user-menu-item-2"
                      >
                        <PowerIcon className="h-5 w-5" />
                        Sign out
                      </a>
                    </Link>
                  </motion.div>
                )}

              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              <a
                href="#"
                className="rounded-md px-3 py-2 font-bold hover:bg-[#40251B] focus:bg-[#40251B] text-sm hover:text-[#D9D0C1] focus:text-[#D9D0C1] text-[#40251B] justify-between transition-all flex"
                aria-current="page"
              >
                Dashboard
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <PresentationChartBarIcon className="h-5 w-5 " />
                </motion.div>
              </a>
            </div>
          </motion.div>
        )}

      </nav>
    </>
  );
}
