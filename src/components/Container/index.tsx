import classNames from "classnames";
import React from "react"

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    scrollXY?: Boolean;
    scrollX?: Boolean;
    scrollY?: Boolean;
    full?: Boolean;
}

interface ContainerItemProps extends React.HTMLProps<HTMLDivElement> {
    containerTitle?: String | null;
    scrollXY?: Boolean;
    scrollX?: Boolean;
    scrollY?: Boolean;
    full?: Boolean;
}

export const Container = ({ className, children, scrollY, full }: ContainerProps) => {
    return <div className={classNames((className || "container"), { scrollY, full })}>
        {children}
    </div>
}

Container.Item = ({ containerTitle, children, scrollY, full }: ContainerItemProps) => {
    return <div className={classNames("container", { scrollY, full })}>
        {containerTitle && <div className="container--title">{containerTitle}</div>}
        {children}
    </div>
}