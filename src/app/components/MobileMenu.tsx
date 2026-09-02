"use client";

import NavLinks from "./NavLinks";

interface MobileMenuProps {
  extraClassName?: string;
  onNavigate?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ extraClassName, onNavigate }) => (
  <NavLinks extraClassName={extraClassName} onNavigate={onNavigate} />
);

export default MobileMenu;
