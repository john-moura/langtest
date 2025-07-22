import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>

      </div>
      <div className="ms-auto">
        <a href="https://langtest.io" target="_blank" rel="noopener noreferrer">
          LangTest
        </a>
        <span className="me-1"> - The easiest way to obtain you German language proficiency certificate</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
