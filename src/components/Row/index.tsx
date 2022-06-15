import classNames from "classnames";
import React from "react"

interface RowProps extends React.HTMLProps<HTMLDivElement>{
    children?: React.ReactNode;
    justifyCenter?: Boolean;
    alignCenter?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
    isMobile?: Boolean;
}

export const Row = ({ style, justifyCenter, alignCenter, fullH, fullW, children, isMobile }: RowProps) => {
    return <div style={style} className={classNames("row", { justifyCenter, alignCenter, fullH, fullW, isMobile })}>
        {children}
    </div>
}