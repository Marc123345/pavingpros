"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a Call" },
];

interface NavLinksProps {
  extraClassName?: string;
  onNavigate?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ extraClassName = "", onNavigate }) => {
  const pathname = usePathname();

  return (
    <ul className={`navigation ${extraClassName}`}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href} className={isActive ? "current" : ""}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
