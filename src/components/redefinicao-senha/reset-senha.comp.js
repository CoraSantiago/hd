import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


export const ResetPassword = ({handleOnChange, handleOnResetSubmit,
formSwitcher, email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-light text-center'>Reset de senha</h1>
            <hr />
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                    <Form.Label>Endereço de Email</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder='Digite seu Email'
                    required
                    />
                    </Form.Group>

                    <Button type="submit">Enviar link para login</Button> 
                </Form>            
            </Col>
        </Row>

        <Row>
            <Col>
              <a className='text-light' href='#!' onClick={()=>formSwitcher("login")}>Login</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}