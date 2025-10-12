'use client';

import { usePathname } from 'next/navigation';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  const handleResumeClick = () => {
    window.open(
      '/resume.pdf',
      '_blank'
    )
  }

  const navTabs = [
    { label: 'HOME', href: '/' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'DESIGN', href: '/design' },
  ]

  return (
    <nav className='w-[100vw] md:w-[inherit] flex flex-col md:flex-row justify-center md:justify-between items-center bg-zinc-950 py-3 sticky top-0'>
      <div className='navbar collapsible'>
        {navTabs.map(tab => {
          const active = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href} className={`clickable base-navtab ${active ? 'active-navtab' : 'inactive-navtab'}`}>
              {tab.label}
            </Link>
          );
        })}
      </div>

      <div className='flex flex-row gap-3 items-center'>
        <Link href='mailto:hassanshahzad2002sm@gmail.com' rel='noopener noreferrer'>
          <MdEmail className='icon clickable'/>
        </Link>
        <Link href='https://www.linkedin.com/in/thehassanshahzad/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='icon clickable'/>
        </Link>
        <Link href='https://www.github.com/hassanshahzad5/' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='icon clickable'/>
        </Link>
        <button type='button' onClick={handleResumeClick} className='clickable flex flex-row items-center justify-center border-1 border-zinc-300 py-0.5 px-1.5 border-l-10'>
          <AiOutlineDownload className='icon mr-2'></AiOutlineDownload>
          Resume
        </button>
      </div>
    </nav>
  )
}