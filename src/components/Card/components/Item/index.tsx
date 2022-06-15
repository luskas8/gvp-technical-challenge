import React from "react"
import { Badge } from "../../../Badge"

interface ItemProps {
    text: String;
    value?: String | null;
}

export const Item = ({ text, value }: ItemProps) => {
    return (
        <div className="card-item">
            <div className="card-item__content">{text}</div>
            {value && <Badge value={value} />}
        </div>
    )
}