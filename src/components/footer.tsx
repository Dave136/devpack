import { IoHeart, IoLogoReact } from 'react-icons/io5';

const Footer = () => (
  <footer className="flex justify-center gap-2 pt-12 pb-6">
    <p className="flex items-center text-sm text-gray-500">
      &copy; All rights reserved, made with{' '}
      <IoLogoReact className="mx-1 text-gray-700 dark:text-gray-400" /> and{' '}
      <IoHeart className="ml-1" color="red" />
    </p>
  </footer>
);

export default Footer;
