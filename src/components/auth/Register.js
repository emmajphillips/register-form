import React from 'react'

import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'


// component imports
import PageContainer from '../common/PageContainer'
import Form from '../common/Form'
import FormInput from '../common/FormInput'
import FormButton from '../common/FormButton'

function Register() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: '',
    howDidYouFindOut: ''
  })

  const handleChange = event => {
    const value = event.target.value
    const updatedFormData = { ...formData, [event.target.name]: value }
    setFormData(updatedFormData)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }


  return (
    <PageContainer>
      <Form onSubmit={handleSubmit}>

        <FormInput
          name='name'
          label='Name'
          placeholder='name'
          icon={faUser}
          value={formData.name}
          onChange={handleChange}
        />

        <FormInput
          name='email'
          label='Email'
          placeholder='email'
          icon={faEnvelope}
          value={formData.email}
          onChange={handleChange}
        />


        <FormButton
          buttonText='Register'
        />
      </Form>
    </PageContainer>
  )
}

export default Register