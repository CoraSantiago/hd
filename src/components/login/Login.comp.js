import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


export const LoginForm = ({handleOnChange, email, pass}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-light text-center'>Login</h1>
            <hr />
                <Form>
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
                    <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                    type="senha"
                    name="senha"
                    onChange={handleOnChange}
                    value={pass}
                    placeholder='Digite sua Senha'
                    required
                    />
                    </Form.Group>
                    <Button type="submit">Entrar</Button> 
                </Form>            
            </Col>
        </Row>

        <Row>
            <Col>
              <a className='text-light' href='#!'>esqueceu sua senha?</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,

}