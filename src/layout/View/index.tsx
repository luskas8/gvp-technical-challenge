import React, { ReactNode } from "react"

interface LayoutProps {
    children?: ReactNode;
}

export const PageLayout = ({ children }: LayoutProps) => {
    return (
        <div className="page-layout">
            <header className="page-layout__navbar">
                <div className="page-layout__navbar--title">Dashboard</div>
                <div className="page-layout__navbar--subtitle">Visão Executiva</div>
            </header>
            <main className="page-layout__main">
                {children}
            </main>
        </div>
    )
}