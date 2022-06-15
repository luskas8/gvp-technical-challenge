import React, { createContext, useEffect, useMemo, useState } from "react";

type LayoutContextProps = {
    isMobile: boolean;
}

const DEFAULT_VALUES = {
    isMobile: false,
}

const LayoutContext = createContext<LayoutContextProps>(DEFAULT_VALUES);

interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const [isMobile, setIsMobile] = useState(DEFAULT_VALUES.isMobile);

    const getMobileDetect = (userAgent: string) => {
        const isAndroid = (): boolean => Boolean(userAgent.match(/Android/i));
        const isIos = (): boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
        const isOpera = (): boolean => Boolean(userAgent.match(/Opera Mini/i));
        const isWindows = (): boolean => Boolean(userAgent.match(/IEMobile/i));

        const isMobile = (): boolean => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
        const isDesktop = (): boolean => Boolean(!isMobile());
        return {
            useMobile: isMobile(),
            useDesktop: isDesktop(),
            useAndroid: isAndroid(),
            useIos: isIos()
        };
    };

    // eslint-disable-next-line
    const mobileDetect = () => {
        if (typeof navigator === 'undefined') return;

        return getMobileDetect(navigator.userAgent);
    };

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    }, [])

    const mobileDetectMEMO = useMemo(() => {
        return mobileDetect();
    }, [mobileDetect]);

    useEffect(() => {
        if (mobileDetectMEMO?.useDesktop) {
            setIsMobile(mobileDetectMEMO?.useMobile || false);
        } else {
            setIsMobile(dimensions.width <= 768)
        }
    // eslint-disable-next-line
    }, [dimensions])

    return (
        <LayoutContext.Provider
            value={{
                isMobile
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutContext;