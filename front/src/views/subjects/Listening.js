import React from 'react'

import { cilHeadphones } from '@coreui/icons'
import SubjectContent from './SubjectContent';


const Reading = ({ className }) => {

    const subjectInfo = 
        {
          name: 'Listening',
          description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
          icon: cilHeadphones,
        }
      

    const tests = [
      {
        title: 'Listening 1',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/listening/1',
        color: "success",
      },
      {
        title: 'Listening 2',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/listening/2',
        color: "success",
      },
      {
        title: 'Listening 3',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/listening/3',
        color: "success",
      },
      {
        title: 'Listening 4',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/listening/4',
        color: "success",
      },
    ]

    return(
        <>
            <SubjectContent tests={tests} concludedTests={tests} subjectInfo={subjectInfo} />
        </>
    )

}

export default Reading