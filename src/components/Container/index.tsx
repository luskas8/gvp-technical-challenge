import classNames from "classnames";
import React from "react"

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    scrollXY?: Boolean;
    scrollX?: Boolean;
    scrollY?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
    isMobile: Boolean;
}

interface ContainerItemProps extends React.HTMLProps<HTMLDivElement> {
    containerTitle?: String | null;
    scrollXY?: Boolean;
    scrollX?: Boolean;
    scrollY?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
    isMobile: Boolean;
}

export const Container = ({ className, children, scrollY, fullW, fullH, isMobile }: ContainerProps) => {
    return <div className={classNames((className || "container"), { scrollY, fullW, fullH, isMobile })}>
        {children}
    </div>
}

Container.Item = ({ style, containerTitle, children, scrollY, fullW, fullH, isMobile }: ContainerItemProps) => {
    return <div style={style} className={classNames("container__item", { scrollY, fullW, fullH, isMobile })}>
        {containerTitle && <div className="container__item--title">{containerTitle}</div>}
        {children}
    </div>
}