import home from '../public/images/home.jpg';
import Image from 'next/image';
function HomePage() {
  return (
    <div className=''>
      <Image
        src={home}
        alt='Picture of the author'
        width='1500px'
        height='600px'
      />
    </div>
  );
}

export default HomePage;
