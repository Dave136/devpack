import { useEffect, useState } from 'react';

export type Viewport = {
  mobile: boolean;
  table: boolean;
  laptop: boolean;
  desktop: boolean;
};

const MOBILE_SIZE = 640;
const TABLET_SIZE = 768;
const LAPTOP_SIZE = 1024;

const useViewport = (): Viewport => {
  const [viewport, setViewport] = useState({
    mobile: false,
    table: false,
    laptop: false,
    desktop: false,
  });

  const enable = (screen: string) => {
    setViewport(() => ({
      desktop: false,
      laptop: false,
      table: false,
      mobile: false,
      [screen]: true,
    }));
  };

  const handleResize = () => {
    const { innerWidth: width } = window;
    if (width < MOBILE_SIZE) {
      enable('mobile');
    } else if (width > MOBILE_SIZE && width < TABLET_SIZE) {
      enable('table');
    } else if (width > TABLET_SIZE && width < LAPTOP_SIZE) {
      enable('laptop');
    } else if (width > LAPTOP_SIZE) {
      enable('desktop');
    } else {
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewport;
};

export default useViewport;
