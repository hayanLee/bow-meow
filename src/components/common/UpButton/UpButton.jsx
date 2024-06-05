import { useEffect, useState } from 'react';
import { StUpIcon } from './UpButton.styled';

function UpButton() {
  const [upButton, setUpButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setUpButton(true);
      } else {
        setUpButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <div className="scroll__container">{upButton && <StUpIcon onClick={scrollToTop} />}</div>;
}

export default UpButton;
