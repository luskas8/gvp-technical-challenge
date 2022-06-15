import React, { useState } from "react"
import { PieChart } from "react-minimal-pie-chart";
import ReactTooltip from 'react-tooltip';

export const Chart = () => {
    const [hovered, setHovered] = useState<null | Number>(null);
    const data = [
        { title: 'Red', value: 12, color: 'rgba(255, 99, 132, 0.2)' },
        { title: 'Blue', value: 19, color: 'rgba(54, 162, 235, 0.2)' },
        { title: 'Yellow', value: 3, color: 'rgba(255, 206, 86, 0.2)' },
        { title: 'Green', value: 5, color: 'rgba(75, 192, 192, 0.2' },
        { title: 'Purple', value: 2, color: 'rgba(153, 102, 255, 0.2)' },
        { title: 'Orange', value: 3, color: 'rgba(255, 159, 64, 0.2)' },
    ];

    const okData = data.map(({ ...entry }) => {
        return {
            ...entry,
        };
    });

    function makeTooltipContent(entry: any) {
        return `Sector ${entry.title} has value ${entry.value}`;
      }

    return (
        <div data-tip="" data-for="chart">
            <PieChart
                data={okData}
                lineWidth={60}
                onMouseOver={(_, index) => {
                    setHovered(index);
                }}
                onMouseOut={() => {
                    setHovered(null);
                }}
            />
            <ReactTooltip
                id="chart"
                getContent={() =>
                    typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
                }
            />
        </div>
    )
}