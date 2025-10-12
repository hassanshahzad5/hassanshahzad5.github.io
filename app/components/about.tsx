import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';

export default function AboutMe() {
  const handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/place/Broomfield,+CO/@39.9667804,-105.145963,12z/',
      '_blank'
    )
  }

  return (
    <article className='w-[100%] flex flex-col md:flex-row justify-center md:justify-between items-center border-1 border-zinc-800 p-4 rounded-lg'>
      <section>
        <Image src='/profile.jpg' alt='Picture of Hassan Shahzad' width={50} height={0} className='rounded-md w-50 h-auto'></Image>  
      </section>

      <section className='flex flex-col items-center justify-center flex-1 md:ml-4 h-auto md:pl-5'>
        <h1 className='text-3xl md:text-5xl mt-3 text-center'>Hi, I&apos;m Hassan Shahzad</h1>
        <h2 className='text-xl md:text-2xl text-center'>Full Stack Developer, Software Engineer</h2>
        <button type="button" onClick={handleLocationClick} className='clickable flex items-center text-sm md:text-l text-center'>
          <MdLocationPin className='icon icon-small'></MdLocationPin>
          Broomfield, Colorado, United States
        </button>
      </section>
    </article>
  )
}
