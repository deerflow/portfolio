import { useEffect, useRef } from 'react';
import settings from '../settings';

const onScroll = () => {
    if (window.scrollY > 10) document.documentElement.setAttribute('data-scrolled', 'true');
    else document.documentElement.removeAttribute('data-scrolled');
};

const useScrollTransition = () => {
    const transitionTimeout = useRef<number>(0);

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', () => {
            document.documentElement.setAttribute('data-just-scrolled', 'true');
            onScroll();
            clearTimeout(transitionTimeout.current);
            transitionTimeout.current = setTimeout(
                () => document.documentElement.removeAttribute('data-just-scrolled'),
                settings.scrollTransitionDuration
            ) as unknown as number;
        });
    }, []);
};

export default useScrollTransition;
