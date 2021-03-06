import React, { useState } from 'react'

import { faEnvelope, faUser, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'


// component imports
import HeroBanner from '../common/HeroBanner'
import PageContainer from '../common/PageContainer'
import Form from '../common/Form'
import FormInput from '../common/FormInput'
import FormButton from '../common/FormButton'
import FormLink from '../common/FormLink'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: '',
    howDidYouFindOut: ''
  })


  const [formDataCorrect, setFormDataCorrect] = useState(false)
  const [formFilled, setFormFilled] = useState(false)
  const [passwordsMatch, setPasswordsMatch] = useState(false)
  const [emailValid, setEmailValid] = useState(false)


  const handleChange = event => {
    const value = event.target.value
    const updatedFormData = { ...formData, [event.target.name]: value }
    setFormData(updatedFormData)
  }

  const checkPasswordMatch = () => {
    if (formData.password === formData.passwordConfirmation && formData.password.length > 1) {
      setPasswordsMatch(true)
    } else {
      console.log('Your Passwords do not match')
    }
  }

  const checkEmailValid = () => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (formData.email.match(mailformat)) {
      setEmailValid(true)
    } else {
      console.log('Your email is not valid')
    }
  }

  const checkFormIsFilled = () => {
    if (
      formData.name.length >= 1 &&
      formData.email.length >= 1 &&
      formData.password.length >= 1 &&
      formData.passwordConfirmation.length >= 1 &&
      formData.howDidYouFindOut.length >= 1
    ) {
      setFormFilled(true)
    } else {
      console.log('The form is not complete')
    }
  }


  const checkForErrors = () => {
    checkFormIsFilled()
    checkEmailValid()
    checkPasswordMatch()
    if (
      formFilled &&
      emailValid &&
      passwordsMatch
    ) {
      setFormDataCorrect(true)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    checkForErrors()
    if (formDataCorrect) {
      console.log(formData)
    }
  }


  return (
    <>
      <HeroBanner text='Sign up to DirectlyApply' />
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

          <FormInput
            name='phoneNumber'
            label='Phone Number (optional)'
            placeholder='phone number'
            icon={faPhone}
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <FormInput
            name='password'
            label='Password'
            placeholder='password'
            icon={faLock}
            value={formData.password}
            onChange={handleChange}
            type='password'
          />

          <FormInput
            name='passwordConfirmation'
            label='Password Confirmation'
            placeholder='password confirmation'
            icon={faLock}
            value={formData.passwordConfirmation}
            onChange={handleChange}
            type='password'
          />

          <div className='field'>
            <label className='label'>How did you find out about us?</label>
            <div className='control'>
              <div className='select'>
                <select
                  name='howDidYouFindOut'
                  onChange={handleChange}
                  value={formData.howDidYouFindOut}
                >
                  <option disabled value=''>-</option>
                  <option value='social-media'>Social media</option>
                  <option value='linkedin'>LinkedIn</option>
                  <option value='glassdoor'>Glassdoor</option>
                  <option value='word-of-mouth'>Word of mouth</option>
                </select>
              </div>
            </div>
          </div>


          <FormButton
            buttonText='Register'
          />
          <FormLink to='/login' text='Already have an account?' />
        </Form>
      </PageContainer>
    </>
  )
}

export default Register