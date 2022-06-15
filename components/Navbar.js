import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Logo
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='collapsibleNavbar'
          >
            <ul className='navbar-nav'>
              <li className='nav-item m-2'>
                <Link href='/'>
                  <a className='nav-link active' href='/'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='/about'>
                  <a className='nav-link active'>About</a>
                </Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='/contact'>
                  <a className='nav-link active'>Contact</a>
                </Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='/blog'>
                  <a className='nav-link active'>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
