import classNames from "classnames";
import React from "react"

interface RowProps {
    children?: React.ReactNode;
    justifyCenter?: Boolean;
    alignCenter?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
}

export const Row = ({ justifyCenter, alignCenter, fullH, fullW, children }: RowProps) => {
    return <div className={classNames("row", { justifyCenter, alignCenter, fullH, fullW })}>
        {children}
    </div>
}