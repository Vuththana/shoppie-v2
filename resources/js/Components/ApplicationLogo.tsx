import { ImgHTMLAttributes, SVGAttributes } from 'react';

export default function ApplicationLogo({children, ...props}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            {...props}
            src='/storage/logo/shoppie_logo.png'
            className='h-10'
        >
            {children}
        </img>
    );
}