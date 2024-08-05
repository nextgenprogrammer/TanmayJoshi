import React from 'react'
import logo from '../images/Logo.png'

const Navbar = () => {
    return(
        <div className='grid place-items-end'>
            <div>
                <p className='text-3xl color text-orange-400 ... flex'> 
                    <svg class="h-8 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                    INTRODUCTION
                </p>
                <p className='text-3xl color text-orange-400 ... flex'> 
                <svg class="h-8 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                    ARCHITECTURE
                </p>
                <p className='text-3xl color text-orange-400 ... flex'> 
                <svg class="h-8 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                    INTERIOR
                </p>
                <p className='text-3xl color text-orange-400 ... flex'> 
                <svg class="h-8 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                    ABOUT US
                </p>
                <p className='text-3xl color text-orange-400 ... flex'> 
                <svg class="h-8 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                    REACH US
                </p>
            </div>
        </div>
    );
}

export default Navbar;