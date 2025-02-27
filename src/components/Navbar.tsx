import Link from 'next/link';
import BarModel from '@/models/BarModel';
const Navbar = () => {
    const model = BarModel();
    return (
        <div className="bg-gray-800 sticky top-0">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button onClick={model.action.toggleSidebar} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                      <div className="absolute -inset-0.5"></div>
                      <div className="sr-only">Open main menu</div>
                      <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                      <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <div className='text-white text-lg font-bold'>Assessment</div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {
                            model.defaultMenu.map((item) => (
                                <Link key={item.id} href={item.link} className='text-white px-3 py-2 rounded-md text-sm font-medium'>
                                    {item.title}
                                </Link>
                            ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" suppressHydrationWarning={true}>
                        {/* <UserMenu /> */}
                        
                        <div className={`relative ml-3 ${model.isLoggedIn ? "block" : "hidden"}`} suppressHydrationWarning={true}>
                <button onClick={model.action.toggleUserMenu} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <div className="h-10 w-10 rounded-full bg-rose-700 flex items-center justify-center font-bold text-lg text-white">{model.user?.email?.charAt(0).toUpperCase()}</div>
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

            <Link href='/login' className={`text-white px-3 py-2 rounded-md text-sm font-medium ${!model.isLoggedIn ? "block" : "hidden"}`}>
                Login
            </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;