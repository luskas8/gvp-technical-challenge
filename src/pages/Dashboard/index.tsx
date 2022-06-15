import React from "react"
import { Card, Chart, Container, Row } from "../../components"
import { useLayout } from "../../hooks"
import { cardsData, chartData } from "../../services/mockData"

export const Dashboard = () => {
    const { isMobile } = useLayout();
    return (
        <Container fullH fullW isMobile={isMobile}>
            <Container.Item style={{ minHeight: isMobile ? "100%" : "" }} containerTitle="Canais" scrollY fullW={isMobile} isMobile={isMobile}>
                <Row isMobile={isMobile}>
                    {
                        cardsData.map((item, idx) => {
                            return (
                                <Card title={item.title} items={item.items} key={`card-${item.title}-${idx}`} />
                            )
                        })
                    }
                </Row>
            </Container.Item>
            <Container.Item containerTitle="Gráfico de recebidos por canais" fullW isMobile={isMobile}>
                <Row justifyCenter alignCenter fullW fullH>
                    <Chart data={chartData}/>
                </Row>
            </Container.Item>
        </Container>
    )
}