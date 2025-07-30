import React from 'react'

import { cibReadme } from '@coreui/icons'
import SubjectContent from './SubjectContent';


const Reading = ({ className }) => {

    const subjectInfo = 
        {
          name: 'Reading',
          description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
          icon: cibReadme,
        }

    const tests = [
      {
        title: 'Reading 1',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: 'readingtest/1',
        color: "success",
      },
      {
        title: 'Reading 2',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: 'readingtest/2',
        color: "success",
      },
      {
        title: 'Reading 3',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: 'readingtest/3',
        color: "success",
      },
      {
        title: 'Reading 4',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: 'readingtest/4',
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