// type CustomTypes = 'custom' | 'page' | 'element' | 'element-item';
import {
  IoCreateOutline,
  IoReaderOutline,
  IoBrowsersOutline,
  IoGridOutline,
} from 'react-icons/io5';
import type { IconType } from 'react-icons';

type ThemeColors = {
  border: string;
  bg: string;
};

type Theme = {
  custom: ThemeColors;
  page: ThemeColors;
  element: ThemeColors;
  'element-item': ThemeColors;
  [key: string]: ThemeColors;
};

type ThemeIcon = {
  custom: IconType;
  page: IconType;
  element: IconType;
  'element-item': IconType;
  [key: string]: IconType;
};

export const theme: Theme = {
  custom: {
    border: 'border-gray-500',
    bg: 'bg-gray-500',
  },
  page: {
    border: 'border-cyan-600',
    bg: 'bg-cyan-600',
  },
  element: {
    border: 'border-green-600',
    bg: 'bg-green-600',
  },
  'element-item': {
    border: 'border-lime-600',
    bg: 'bg-lime-600',
  },
};

export const icons: ThemeIcon = {
  custom: IoCreateOutline,
  page: IoBrowsersOutline,
  element: IoReaderOutline,
  'element-item': IoGridOutline,
};
