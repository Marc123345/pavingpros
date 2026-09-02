"use client";

import { useEffect, useState, useCallback } from "react";

const BackToTop: React.FC = (): JSX.Element | null => {
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    const onScroll = useCallback(() => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    }, [hasScrolled]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [onScroll]);

    return (
        <>
            {hasScrolled && (
            <a className={`back-to-top-wrapper ${hasScrolled && "d-block"}`} href="#top">
                <button id="back_to_top" type="button" className="back-to-top-btn">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </a>
            )}
        </>
    );
}
export default BackToTop;