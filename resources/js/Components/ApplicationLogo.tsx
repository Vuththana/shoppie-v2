import { ImgHTMLAttributes, SVGAttributes } from 'react';

export default function ApplicationLogo({className = '',children, ...props}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            {...props}
            src='/storage/logo/shoppie_logo.png'
            className={className}
        >
            {children}
        </img>
    );
}