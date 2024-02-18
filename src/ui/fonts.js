import { Montserrat, Comfortaa } from 'next/font/google';

export const comfortaa = Comfortaa({
    display: 'swap',
    weight: ['700'],
    subsets: ['cyrillic-ext', 'latin-ext']
});

export const montserrat = Montserrat({
    display: 'swap',
    weight: ['500', '400'],
    subsets: ['cyrillic-ext', 'latin-ext']
});