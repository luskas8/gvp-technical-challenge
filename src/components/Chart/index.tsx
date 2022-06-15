import React, { useEffect, useState } from "react"
import { PieChart } from "react-minimal-pie-chart";
import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";
import ReactTooltip from 'react-tooltip';
import { Row } from "../Row";

interface ChartProps {
    data: Array<DataEntry>
}

export const Chart = ({ data }: ChartProps) => {
    const [currentData, setCurrentData] = useState<Array<DataEntry>>(data);
    const [hovered, setHovered] = useState<null | Number>(null);

    function makeTooltipContent(entry: any) {
        return `${entry.title}: ${entry.value}%`;
    }

    useEffect(() => {
        setCurrentData(data);
    }, [data]);



    return (
        <div className="chart" data-tip="" data-for="chart">
            <PieChart
                data={currentData}
                lineWidth={60}
                onMouseOver={(_, index) => {
                    setHovered(index);
                }}
                onMouseOut={() => {
                    setHovered(null);
                }}
            />
            <Row justifyCenter alignCenter style={{ marginTop: '51px' }}>
                {
                    currentData.map((item, idx) => {
                        return (
                            <div
                                onMouseOver={() => {
                                    setHovered(idx);
                                }}
                                onMouseOut={() => {
                                    setHovered(null);
                                }}
                                className="chart--label"
                                key={`chart-label-${item.title}-${idx}`}
                            >
                                <span style={{ background: item.color }}></span>
                                {item.title}
                            </div>
                        )
                    })
                }
            </Row>
            <ReactTooltip
                id="chart"
                getContent={() =>
                    typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
                }
            />
        </div>
    )
}