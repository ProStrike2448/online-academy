import type { FC } from 'react';
import Link from 'next/link';

type NavLink = {
  title: string;
  url: string;
};

type NavProps = {
  links: NavLink[];
};

const Nav: FC<NavProps> = ({ links }) => (
  <nav className="flex space-x-3">
    {links.map(({ title, url }) => (
      <Link key={title} href={url} className="rounded-lg  py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
    ))}
  </nav>
);

export type { NavLink };
export default Nav;