import classNames from "classnames";
import React from "react"

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    scrollXY?: Boolean;
    scrollX?: Boolean;
    scrollY?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
}

interface ContainerItemProps extends React.HTMLProps<HTMLDivElement> {
    containerTitle?: String | null;
    scrollXY?: Boolean;
    scrollX?: Boolean;
    scrollY?: Boolean;
    fullW?: Boolean;
    fullH?: Boolean;
}

export const Container = ({ className, children, scrollY, fullW, fullH }: ContainerProps) => {
    return <div className={classNames((className || "container"), { scrollY, fullW, fullH })}>
        {children}
    </div>
}

Container.Item = ({ containerTitle, children, scrollY, fullW, fullH }: ContainerItemProps) => {
    console.log(fullW)
    return <div className={classNames("container__item", { scrollY, fullW, fullH })}>
        {containerTitle && <div className="container__item--title">{containerTitle}</div>}
        {children}
    </div>
}