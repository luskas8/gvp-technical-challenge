import React from "react"
import { Card, Chart, Container, Row } from "../../components"

export const Dashboard = () => {
    return (
        <Container fullH fullW>
            <Container.Item containerTitle="Canais" scrollY>
                <Row>
                    <Card title={"Card title"} items={[{ text: "text 22", value: "99" }, { text: "text 60  ", value: "99" }]} />
                    <Card title={"Card title"} />
                </Row>
            </Container.Item>
            <Container.Item containerTitle="Gráfico de recebidos por canais" fullW>
                <Row justifyCenter alignCenter fullW fullH>
                    <Chart />
                </Row>
            </Container.Item>
        </Container>
    )
}