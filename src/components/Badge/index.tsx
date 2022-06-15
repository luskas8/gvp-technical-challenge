import React from "react"

interface BadgeProps {
    value: String;
}

export const Badge = ({ value }: BadgeProps) => {
    return (
        <div className="badge">
            {value}
        </div>
    )
}