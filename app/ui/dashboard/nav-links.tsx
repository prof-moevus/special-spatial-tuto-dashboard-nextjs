'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CakeIcon
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';




// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Admin', href: '/dashboard/admin', icon: CakeIcon },

];

export default function NavLinks() {
  const pathname = usePathname();



  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        const linkStyle = 'flex h-[48px] grow items-center justify-center rounded-md bg-gray-50 text-sm font-medium md:justify-start ';
        const linkSpacingStyle = "gap-2 p-3 md:p-2 md:px-3 "
        const linkHoverStyle = "hover:bg-sky-100 hover:text-blue-600 md:flex-none "

        let activeLink = " "
        if (pathname === link.href) {
          activeLink = 'bg-emerald-100 text-emerald-600 '
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={linkStyle + linkHoverStyle + linkSpacingStyle + activeLink}        
            >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
