'use client';

import { usePathname } from 'next/navigation';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-[inherit] flex flex-row justify-center items-center bg-zinc-950 py-3'>
      <p className='text-xs'>&copy; 2025 Hassan Shahzad</p>
    </footer>
  )
}