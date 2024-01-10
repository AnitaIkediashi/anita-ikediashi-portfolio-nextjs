'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll} from 'react-scroll'

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false)

    const scrollToTop = () => {
    scroll.scrollToTop();
  };

    useEffect(()=> {
        const handleScrollToTopBtn = () => {
            window.scrollY > 450 ? setShowButton(true) : setShowButton(false)
        }
        window.addEventListener('scroll', handleScrollToTopBtn)
        return () => {
            window.removeEventListener('scroll', handleScrollToTopBtn)
        }
    }, [])

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-10 right-6 bg-color-blue-200 w-7 h-7 rounded-sm grid place-items-center cursor-pointer overflow-y-hidden hover:bg-color-blue-100 duration-300 transition"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;