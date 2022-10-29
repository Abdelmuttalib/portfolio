import * as React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="layout flex h-14 items-center justify-between">
        <UnstyledLink
          href="/"
          openNewTab
          className="hover:decoration-primary-600 text-lg font-bold hover:underline hover:decoration-2 hover:underline-offset-2"
        >
          Abdelmuttalib Ahmed
        </UnstyledLink>
        {/* <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </header>
  );
}
