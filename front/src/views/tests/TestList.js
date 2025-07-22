import React from 'react'
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'


const TestList = ({ tests, icon, className }) => {
  return (
    <CRow className={className} xs={{ gutter: 4 }}>
      {tests.map((test, index) => (
        <CCol lg={true} key={index}>
          {test.to ? (
            <Link to={test.to} style={{ textDecoration: 'none' }}>
              <CardContent test={test} icon={icon} />
            </Link>
          ) : (
            <CardContent test={test} icon={icon} />
          )}
        </CCol>
      ))}
    </CRow>
  )
}

const CardContent = ({ test, icon }) => {
  return (
    <CCard>
        <CCardBody>
            <CCardTitle>
                <div className="d-flex align-items-center gap-2">
                    <CIcon icon={icon} height={22} />
                    {test.title}
                </div>
            </CCardTitle>
            <CCardText>
                {test.description}
            </CCardText>
        </CCardBody>
    </CCard>
  )
}

export default TestList