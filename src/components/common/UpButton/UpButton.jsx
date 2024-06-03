import { useEffect, useState } from 'react';
import { StUpIcon } from './UpButton.styled';

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
      if (window.scrollY > 300) {
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

  return <div className="scroll__container">{upButton && <StUpIcon onClick={scrollToTop} />}</div>;
}

export default UpButton;
