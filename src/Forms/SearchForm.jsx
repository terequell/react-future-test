import React, { useState } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import styles from '../Styles.module.css'

const SearchForm = (props) => {
   const [currentInput, setCurrentInput] = useState('')

   const submitForm = (e) => {
      e.preventDefault()
      props.submitForm(currentInput)
   }

   return (
      <Form onSubmit = {(e) => submitForm(e)} inline>
         <FormControl type="text" placeholder="Type your request here" className="mr-sm-2" value = {currentInput} onChange = {(e) => setCurrentInput(e.target.value)}/>
         <Button variant="dark" type = 'submit'>Search</Button>
      </Form>
   )
}

export default SearchForm