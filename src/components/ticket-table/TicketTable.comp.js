import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({tickets}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Assunto</th> 
                    <th>Status</th> 
                    <th>Data de Abertura</th> 
                </tr>    
            </thead>
            <tbody>
                {tickets.length ? (
                    tickets.map((row)=> (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.subject}</td>
                            <td>{row.status}</td>
                            <td>{row.addedAt}</td>
                        </tr>
                    ))
                )   :   (
                    <tr>
                        <td colSpan="4" className="text-center">
                            Sem tickets para tratar
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};