import React from "react";
import { Link, Outlet } from "react-router-dom";

//header
function Header() {
  return (
    <>
      <header className="relative h-24 w-full py-4 px-4 border-y-black border-y-2 flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-black">Unicorns </h1>
          <p className="text-sm font-light">Rate Universities and Courses</p>
        </div>
        <nav className="flex px-8 items-center text-lg font-mono absolute inset-y-0 right-0 border-l-black border-l-2">
            <ul className="flex flex-row gap-x-8">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
      </header>
    </>
  );
}

//footer
function Footer() {
  return <></>;
}

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
