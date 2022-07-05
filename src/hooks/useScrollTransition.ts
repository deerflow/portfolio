import { useEffect, useRef } from 'react';
import settings from '../settings';
import { SetState } from '../types/utils';

const onScroll = () => {
    if (window.scrollY > 10) document.documentElement.setAttribute('data-scrolled', '');
    else document.documentElement.removeAttribute('data-scrolled');
};

const useScrollTransition = ({ setIsScrollHydrated }: UseScrollTransitionOptions) => {
    const transitionTimeout = useRef<number>(0);

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', () => {
            document.documentElement.setAttribute('data-just-scrolled', '');
            onScroll();
            clearTimeout(transitionTimeout.current);
            transitionTimeout.current = setTimeout(
                () => document.documentElement.removeAttribute('data-just-scrolled'),
                settings.scrollTransitionDuration
            ) as unknown as number;
        });
        setIsScrollHydrated(true);
    }, []);
};

interface UseScrollTransitionOptions {
    setIsScrollHydrated: SetState<boolean>;
}

export default useScrollTransition;
