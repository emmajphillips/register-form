import React from 'react'


// component imports
import PageContainer from '../common/PageContainer'
import Form from '../common/Form'
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




  return (
    <PageContainer>
      <Form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
            />
          </div>
        </div>
        <FormButton
          buttonText='Register'
        />

      </Form>
    </PageContainer>
  )
}

export default Register