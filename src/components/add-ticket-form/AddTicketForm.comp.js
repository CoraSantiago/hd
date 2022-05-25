import React from "react";
import { Form,Row, Col, Button } from "react-bootstrap";
import PropTypes  from 'prop-types'


import "./add-ticket-form-style.css";

export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDataErro, frmDt}) => {
    console.log(frmDt);
    return (
        <Button className="mt-3 add-new-ticket bg-light">
            <h1 className="text-primary">Formulário</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sn={3} className="text-body">
                            Assunto
                        </Form.Label>
                        <Col sn={9}>
                            <Form.Control
                                name="subject"
                                value={frmDt.subject}
                                onChange={handleOnChange}
                                placeholder='Assunto'
                                required
                        />
                        <Form.Text className="text-danger">
                            {frmDataErro.subject && "É necessário informar o assunto"}
                            </Form.Text>
                        </Col> 
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sn={3} className="text-body">
                            Data de abertura de ticket
                        </Form.Label>
                        <Col sn="9">
                            <Form.Control
                                type="date"
                                name="issueDate"
                                value={frmDt.issueDate}
                                onChange={handleOnChange}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-body">Detalhes</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="Detalhes"
                            rows="5"
                            value={frmDt.Detalhes}
                            maxLength='500'
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" variant="info" block>
                        Enviar
                    </Button> 
                </Form>          
            </Button>
        );    
};

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataErro: PropTypes.object.isRequired,
};