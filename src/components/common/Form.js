import React from 'react'

function Form ({ onSubmit, children }) {
  return (
    <div className='columns'>
      <form onSubmit={onsubmit} className='column is-half is-offset-one-quarter box'>
        {children}
      </form>
    </div>
  )
}

export default Form