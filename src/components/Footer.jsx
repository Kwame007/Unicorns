import React from "react";

const Footer = () => {
  //footer

  const date = new Date();
  return (
    <div className="w-full h-fit py-20 bg-indigo-500 text-white flex flex-col justify-center">
      {/* <p className="font-black">Unicorns</p>{" "} */}
      <div className="mb-5">
        <h1 className="text-3xl font-black">Unicorns 🏫 </h1>
        <p className="text-sm font-light">Rate Universities and Courses</p>
      </div>
      <div className="mb-5 md:flex md:gap-5 md:text-center md:mx-auto">
        <p>
          <a href="">About Us</a>
        </p>
        <p>
          <a href="">Help</a>
        </p>
        <p>
          <a href="">Terms & Conditions</a>
        </p>
        <p>
          <a href="">Privacy Policy</a>
        </p>
      </div>
      <div className="mb-5">
        <h4>Developers :</h4>
        <a href="https://bawuahboakye.com">@Bawuahboakye</a>
        <a href="https://twitter.com/__kwame___" className="pl-5">
          @Clement
        </a>
      </div>
      <small className="font-bold">
        All Rights Reserved &copy; {date.getFullYear()}
      </small>{" "}
    </div>
  );
};

export default Footer;
