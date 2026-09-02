"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface LayoutContextValue {
  scroll: boolean;
  mobileMenuVisible: boolean;
  companyInfoVisible: boolean;
  searchPopupVisible: boolean;
  setMobileMenuVisible: (visible: boolean) => void;
  setCompanyInfoVisible: (visible: boolean) => void;
  setSearchPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  handleRemove: () => void;
  handleOpen2: () => void;
  handleRemove2: () => void;
  handleToggle: () => void;
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [companyInfoVisible, setCompanyInfoVisible] = useState(false);
  const [searchPopupVisible, setSearchPopupVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", mobileMenuVisible);
  }, [mobileMenuVisible]);

  useEffect(() => {
    document.body.classList.toggle("company-info-visible", companyInfoVisible);
  }, [companyInfoVisible]);

  useEffect(() => {
    document.body.classList.toggle("search-popup-visible", searchPopupVisible);
  }, [searchPopupVisible]);

  const handleOpen = useCallback(() => setMobileMenuVisible(true), []);
  const handleRemove = useCallback(() => setMobileMenuVisible(false), []);
  const handleOpen2 = useCallback(() => setCompanyInfoVisible(true), []);
  const handleRemove2 = useCallback(() => setCompanyInfoVisible(false), []);
  const handleToggle = useCallback(
    () => setSearchPopupVisible((prev) => !prev),
    []
  );

  const value = useMemo<LayoutContextValue>(
    () => ({
      scroll,
      mobileMenuVisible,
      companyInfoVisible,
      searchPopupVisible,
      setMobileMenuVisible,
      setCompanyInfoVisible,
      setSearchPopupVisible,
      handleOpen,
      handleRemove,
      handleOpen2,
      handleRemove2,
      handleToggle,
    }),
    [
      scroll,
      mobileMenuVisible,
      companyInfoVisible,
      searchPopupVisible,
      handleOpen,
      handleRemove,
      handleOpen2,
      handleRemove2,
      handleToggle,
    ]
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export function useLayout(): LayoutContextValue {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}

export default LayoutContext;
