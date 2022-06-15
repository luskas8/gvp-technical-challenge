import React from "react"
import { Card, Chart } from "../../components"

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard--container">
                <div className="dashboard--container--container scroll-y">
                    <div className="dashboard--container--container__content">
                        <div className="dashboard--container--container__content--title">Canais</div>
                        <div className="dashboard--container--container__content--row">
                            <Card title={"Card title"} items={[{ text: "text 22", value: "99" }, { text: "text 60  ", value: "99" }]} />
                            <Card title={"Card title"} />
                        </div>
                    </div>
                </div>
                <div className="dashboard--container--container full">
                    <div className="dashboard--container--container__content--title">Gráfico de recebidos por canais</div>
                    <div className="dashboard--container--container__content--row">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}