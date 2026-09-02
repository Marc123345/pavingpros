"use client";

import Link from "next/link";

interface MobileMenuProps {
  extraClassName?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ extraClassName }) => {
  return (
    <ul className={`navigation ${extraClassName || ""}`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/how-it-works">How It Works</Link></li>
      <li><Link href="/pricing">Pricing</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/sign-up">Sign Up</Link></li>
    </ul>
  );
};

export default MobileMenu;
