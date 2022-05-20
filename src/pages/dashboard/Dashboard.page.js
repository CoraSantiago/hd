import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import {TicketTable} from "../../components/ticket-table/TicketTable.comp"
import tickets from "../../assets/data/dummy-tickets.json"

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button variant="primary" 
                    style={{fontSize:'2rem', padding: '10px 30 px'}}>Adiciona novo ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <div>Total de tickets: 50</div>
                    <div>Tickets pendentes: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className="mb-2">Tickets adicionados recentemente
                </Col>
            </Row>
            <hr />

            <Row>
                <Col className="recent-ticket">
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    );
};