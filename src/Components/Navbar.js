import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Navbar = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-start justify-start">
                {/* <!-- Page content here --> */}
                
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />

            </div>
            
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-12 overflow-y-auto w-60 bg-base-100 border-r text-base-content">
                    {/* <!-- Sidebar content here --> */}
                   <div className='pb-5'> <CustomLink  to={'author'}>Author</CustomLink></div>
                    <CustomLink to={'favourite-author'}>Favourite Author</CustomLink>
                </ul>
                

            </div>
        </div>
    )

};

export default Navbar;