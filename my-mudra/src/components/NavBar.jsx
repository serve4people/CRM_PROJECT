import React, { useEffect, useState } from "react";
import Menu from "./Menu";
const NavBar = () => {
  const [check, setCheck] = useState(false);

  const isStatus = () => {
    setCheck(!check);
  };
  return (
    <>
      <div className='navbar flex flex-wrap bg-base-100 sticky z-10 border-2'>
        <div className='flex-1 md:basis-3/5 lg:basis-3/5'>
          <span className='btn btn-ghost text-xl mx-auto' onClick={isStatus}>
            My Mudra Fincorp
          </span>
        </div>

        <div className='flex md:basis-1/5 lg:basis-1/4 gap-2'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto'
            />
          </div>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className=''>{!check && <Menu />}</div> */}
      </div>
    </>
  );
};

export default NavBar;
