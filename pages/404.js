import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Errorpage() {
  const router = useRouter();
  const handleInput = () => {
    router.push('/');
  };
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

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
                  <a className='nav-link active'>Home</a>
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
      <div className='container'>
        <div className='pt-5'>
          <h1 className='' id='h1Tag'>
            404
          </h1>
        </div>
        <div id='text'>We are sorry, Page not found!</div>
        <p id='errPara'>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <button id='back'>
          <a onClick={handleInput}>Back to Home page</a>
        </button>
      </div>
    </div>
  );
}

export default Errorpage;
