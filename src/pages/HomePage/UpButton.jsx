import { useEffect, useState } from 'react';
import { StUpIcon } from './HomePage.styles/HomePage.styled';

function UpButton() {
  const [upButton, setUpButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setUpButton(true);
      } else {
        setUpButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div className="scroll__container">
      <button id="top" onClick={scrollToTop} type="button">
        {' '}
        <StUpIcon className={`${window.scrollY > 500 ? 'active' : null}`} />
      </button>
    </div>
  );
}

export default UpButton;
