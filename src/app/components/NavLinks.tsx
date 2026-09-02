import Link from "next/link";

interface NavLinksProps {
  extraClassName?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ extraClassName = "" }) => {
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/how-it-works">How It Works</Link></li>
      <li><Link href="/pricing">Pricing</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/sign-up">Sign Up</Link></li>
    </ul>
  );
};

export default NavLinks;
