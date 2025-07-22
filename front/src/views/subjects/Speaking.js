import React from 'react'

import { cilSpeech } from '@coreui/icons'
import SubjectContent from './SubjectContent';


const Speaking = ({ className }) => {

    const subjectInfo = 
        {
          name: 'Speaking',
          description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
          icon: cilSpeech,
        }

    const tests = [
      {
        title: 'Speaking 1',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/speaking/1',
        color: "success",
      },
      {
        title: 'Speaking 2',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/speaking/2',
        color: "success",
      },
      {
        title: 'Speaking 3',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/speaking/3',
        color: "success",
      },
      {
        title: 'Speaking 4',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/speaking/4',
        color: "success",
      },
    ]

    return(
        <>
            <SubjectContent tests={tests} concludedTests={tests} subjectInfo={subjectInfo} />
        </>
    )

}

export default Speaking