'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  const navTabs = [
    { label: 'Experience', href: '/experience' },
    { label: 'Design', href: '/design'},
    { label: 'Leadership', href: '/leadership'}
  ]

  return (
    <nav className='w-[100%] flex flex-row justify-center'>
      {navTabs.map(tab => {
        const active = pathname === tab.href;
        return (
          <Link key={tab.href} href={tab.href} className={`clickable base-navtab ${active ? 'active-navtab' : 'inactive-navtab'}`}>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  )
}