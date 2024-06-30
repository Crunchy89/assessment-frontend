import BarModel from '@/models/BarModel';
import React from 'react';
import Link from 'next/link';

const UserMenu = () => {
    const model = BarModel();
    if(!model.isLoggedIn){
        return(
            <Link href='/login' className={`text-white px-3 py-2 rounded-md text-sm font-medium`}>
                Login
            </Link>
        )
    }
    return (
            <div className={`relative ml-3`}>
            <button onClick={model.action.toggleUserMenu} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <p className="sr-only">Open user menu</p>
              <div className="h-10 w-10 rounded-full bg-rose-700 flex items-center justify-center font-bold text-lg text-white">{model.user?.email.charAt(0).toUpperCase()}</div>
            </button>
          <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${model.userMenu ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
            {
                model.defaultUserMenu.map((item) => (
                    <Link key={item.id} href={item.link} className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex={-1} id={`user-menu-item-${item.id}`}>
                        {item.title}
                    </Link>
                ))
            }
            <button type="button" onClick={model.action.toogleLogout} className="block px-4 py-2 text-sm text-gray-700" tabIndex={-1} id={`user-menu-item-5`}>
                Logout
            </button>
          </div>
            </div>
    );
};

export default UserMenu;