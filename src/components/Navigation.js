import React from 'react';
import { Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Contact from './Contact';
import Work from './Work';

function Navigation() {
    return (
    <header className="header-nav flex justify-between items-center bg-red-200 py-4">
        {/* left side */}
        <div className="flex items-center">
            <a href="#"><img src="./images/logo.svg" alt="logo" className="logo mr-2 md:ml-10 ml-4"/></a>
        </div>

        {/* right side mobile*/}
        <div className="md:hidden mr-4">
            <button type="button" class="block text-red-600 hover:text-red-100 focus:text-red-100 focus:outline-none">
                <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </button>
        </div>
        {/* right side desktop*/}
        <div className="hidden md:block flex justify-between">
            <a href={<Contact/>} className="inline-block px-4 text-gray-900 font-bold hover:no-underline hover:text-red-500" >about.</a>
            <a href={<Work/>} className="inline-block px-4 text-gray-900 font-bold hover:no-underline hover:text-red-500" >portfolio.</a>
            <a href={<Contact/>} className="inline-block pl-4 pr-12 text-gray-900 font-bold hover:no-underline hover:text-red-500" >blog.</a>
            <a href={<Contact/>} className="inline-block mr-10 p-2 rounded-lg bg-red-600 text-red-100 hover:bg-red-100 hover:no-underline hover:text-red-600" >hire me.</a>
        </div>
    </header>
    )
}

export default Navigation;
