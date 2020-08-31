import React from 'react'

function PageContainer({ children }) {
  return (
    <div className='container'>
      <div className='section'>
        {children}
      </div>
    </div>
  )
}

export default PageContainer