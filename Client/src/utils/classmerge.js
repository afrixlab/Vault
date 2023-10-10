import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...classes) => twMerge(clsx(...classes));

export default cn;
