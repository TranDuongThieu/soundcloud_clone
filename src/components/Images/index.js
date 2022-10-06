import images from '~/assets/images';
import { useState } from 'react';

function Image({ src, alt, ...props }) {
    const handleError = () => {
        setFallback(images.noImage);
    };
    const [fallback, setFallback] = useState('');
    return <img src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default Image;
