import React, { useEffect, useState } from "react";
import {Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import {AddTicketForm} from "../../components/add-ticket-form/AddTicketForm.comp"
import { shortText } from "../../utils/validation";

const initialFrmDt = {
    subject:"",
    issueDate:"",
    Detalhes:"",
};
const initialFrmError = {
    subject:false,
    issueDate:false,
    Detalhes:false,
};
export const AddTicket = () => {
    const[frmData, setFrmData] = useState(initialFrmDt);
    const[frmDataErro, setFrmDataErro] = useState(initialFrmError);
    useEffect(() => {}, [frmData,frmDataErro]);

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFrmData({
            ...frmData,
            [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFrmDataErro(initialFrmError)
        
        const isSubjectValid = await shortText(frmData.subject);

        setFrmDataErro({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Formulário enviado');
    };

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Novo Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                <AddTicketForm 
                handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit}
                frmDt = {frmData}
                frmDataErro = {frmDataErro}
                />
                </Col>
            </Row>
        </Container>
    )
}