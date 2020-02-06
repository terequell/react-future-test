import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const AddNewUserForm = ({addNewUser}) => {
   const [validated, setValidated] = useState(false)

   const [currentForm, setCurrentForm] = useState({id: '', firstName: '', lastName: '', email: '', phone: '', address: '', description: ''})
   
   const handleSubmit = event => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true)
      addNewUser(currentForm)
      setCurrentForm({...currentForm, id: '', firstName: '', lastName: '', email: '', phone: ''})
    };
   return (
      <Form onSubmit = {handleSubmit}>
         <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>id</Form.Label>
               <Form.Control required value = {currentForm.id} onChange = {(e) => setCurrentForm({...currentForm, id: parseInt(e.target.value)})} type="number" placeholder="Enter id" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
               <Form.Label>firstName</Form.Label>
               <Form.Control required value = {currentForm.firstName} onChange = {(e) => setCurrentForm({...currentForm, firstName: e.target.value})} type="text" placeholder="Enter firstName" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>lastName</Form.Label>
               <Form.Control required value = {currentForm.lastName} onChange = {(e) => setCurrentForm({...currentForm, lastName: e.target.value})} type="text" placeholder="Enter lastName" />
            </Form.Group>
         </Form.Row>
         <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>email</Form.Label>
               <Form.Control required value = {currentForm.email} onChange = {(e) => setCurrentForm({...currentForm, email: e.target.value})} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>phone</Form.Label>
               <Form.Control required value = {currentForm.phone} onChange = {(e) => setCurrentForm({...currentForm, phone: e.target.value})} type="tel" placeholder="Enter phone" />
            </Form.Group>
         </Form.Row>
      <Button variant="primary" type="submit">
         Submit
      </Button>
   </Form>
   )
}

export default AddNewUserForm