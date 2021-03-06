import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

//header
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative h-24 w-full py-4 px-4 border-y-black border-y-2 flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-black">Unicorns 🏫 </h1>
          <p className="text-sm font-light">Rate Universities and Courses</p>
        </div>
        <nav className="px-8 hidden sm:flex items-center text-lg font-mono absolute inset-y-0 right-0 border-l-black border-l-2">
          <ul className="flex flex-row gap-x-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="px-8 sm:hidden text-lg font-mono absolute right-0 inset-y-0 border-l-black border-l-2">
          <button
            className="flex text-5xl font-black h-24 items-center"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <MenuIcon className="h-8 w-8 text-black" />
            ) : (
              <XIcon className="h-8 w-8 text-black" />
            )}
          </button>
        </nav>
        {open && (
          <ul className="sm:hidden flex flex-col items-start w-full absolute top-24 left-0 bg-white z-30 px-4 py-4 font-medium text-lg gap-y-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

//footer
function Footer() {
  const d = new Date()
  return (
        <div className="w-full h-28 py-20 bg-purple-100 flex flex-col justify-center">
            <p className="font-black">Unicorns</p>  <span>All Rights Reserved &copy; {d.getFullYear()}</span> <p className="py-2 text-xs font-mono">&lt;Development lead=&quot;<a href="#" className="underline">Clement</a>&quot; junior=&quot;<a href="https://bawuahboakye.com" className="underline">Bawuahboakye</a>&quot; /&gt;</p>
        </div>
  )
}

//page layout order
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
