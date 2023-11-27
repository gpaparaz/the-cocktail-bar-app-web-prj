import { useEffect } from 'react';

const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; // Non rendere alcun componente, poiché è solo per effetti collaterali
};

export default ScrollToTopOnMount;
