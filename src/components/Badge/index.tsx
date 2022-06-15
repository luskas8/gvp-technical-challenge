import React from "react"

interface BadgeProps {
    value: String;
}

export const Badge = ({ value }: BadgeProps) => {
    return (
        <div className="badge">
            <div className="badge--container">
                <div className="badge--container__content">{value}</div>
            </div>
        </div>
    )
}