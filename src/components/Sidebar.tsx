"use client"; // This directive ensures the component is rendered on the client
import BarModel from '@/models/BarModel';
import Link from 'next/link';

const Sidebar = () => {
    const model = BarModel();
    if (!model.showSidebar) return null;    
    return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-80`}>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center justify-between">
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">Assessment</h1>
                <button className="flex items-center justify-center" onClick={model.action.toggleSidebar}>
                    x
                </button>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            {
                model.defaultMenu.map((item) => (
                    <Link href={item.link} key={item.id} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" >
                      <p className="text-[15px] ml-4 text-gray-200 font-bold">{item.title}</p>
                    </Link>
                ))
            }
        </div>
    </div>
    );
};

export default Sidebar;