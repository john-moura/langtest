import React from 'react'

import { cilColorBorder } from '@coreui/icons'
import SubjectContent from './SubjectContent';


const Writing = ({ className }) => {

    const subjectInfo = 
        {
          name: 'Writing',
          description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
          icon: cilColorBorder,
        }
      

    const tests = [
      {
        title: 'Writing 1',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/writing/1',
        color: "success",
      },
      {
        title: 'Writing 2',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/writing/2',
        color: "success",
      },
      {
        title: 'Writing 3',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/writing/3',
        color: "success",
      },
      {
        title: 'Writing 4',
        description: 'Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
        to: '/writing/4',
        color: "success",
      },
    ]

    return(
        <>
            <SubjectContent tests={tests} concludedTests={tests} subjectInfo={subjectInfo} />
        </>
    )

}

export default Writing