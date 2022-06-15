import React from "react"
import { Item } from "./components/Item"

interface CardProps {
    title: String;
    items?: Array<{
        text: String;
        value?: String | null;
    }>
}

export const Card = ({ title, items }: CardProps) => {
    return (
        <div className="card">
            <div className="card__title">{title}</div>
            <div className="card__content">
                {
                    items ? items!.map((item, idx) => {
                        return <Item text={item.text} value={item.value} key={`card-item-${item.text}-${idx}`} />
                    }) : (
                        <p>
                            No content to display.
                        </p>
                    )
                }
            </div>
        </div>
    )
}