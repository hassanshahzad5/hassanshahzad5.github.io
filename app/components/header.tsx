'use client'

import { MdLocationPin, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/place/Broomfield,+CO/@39.9667804,-105.145963,12z/',
      '_blank'
    )
  }

  const handleResumeClick = () => {
    window.open(
      '/resume.pdf',
      '_blank'
    )
  }

  return (
    <aside className='w-[100vw] md:w-1/3 flex flex-col md:h-[100vh] items-center justify-center bg-zinc-900 p-8 box-border'>
      <Image src='/profile.jpg' alt='Picture of Hassan Shahzad' width={100} height={0} className='rounded-xl w-75 h-auto'></Image>
      <h1 className='text-3xl md:text-5xl mt-3 text-center'>Hi, I&apos;m Hassan Shahzad</h1>
      <h2 className='text-xl md:text-2xl text-center'>Full Stack Developer</h2>
      <button type="button" onClick={handleLocationClick} className='clickable text-sm md:text-l flex items-end mb-3'>
        <MdLocationPin className='icon'></MdLocationPin>
        Broomfield, Colorado
      </button>
      <div className='flex gap-3 justify-center items-center'>
        <button type='button' onClick={handleResumeClick} className='clickable border-1 border-white py-1 px-3 border-l-10 flex items-center'>
          <AiOutlineDownload className='icon mr-2'></AiOutlineDownload>
          Resume
        </button>
        <Link href='mailto:hassanshahzad2002sm@gmail.com' rel='noopener noreferrer'>
          <MdEmail className='icon clickable'/>
        </Link>
        <Link href='https://www.linkedin.com/in/thehassanshahzad/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='icon clickable'/>
        </Link>
        <Link href='https://www.github.com/hassanshahzad5/' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='icon clickable'/>
        </Link>
      </div>
    </aside>
  )
}