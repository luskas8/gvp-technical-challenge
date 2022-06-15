import React, { useContext } from "react"
import LayoutContext from "../contexts/layout"

export const useLayout = () => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider.');
    }

    return context;
}