import classNames from "classnames";
import React from "react"

interface RowProps {
    children?: React.ReactNode;
    justifyCenter?: Boolean;
    alignCenter?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
    isMobile?: Boolean;
}

export const Row = ({ justifyCenter, alignCenter, fullH, fullW, children, isMobile }: RowProps) => {
    return <div className={classNames("row", { justifyCenter, alignCenter, fullH, fullW, isMobile })}>
        {children}
    </div>
}