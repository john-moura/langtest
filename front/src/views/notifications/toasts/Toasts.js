import React, { useRef, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import { DocsComponents, DocsExample } from '/src/coreui-components'

const ExampleToast = () => {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  return (
    <>
      <CButton color="primary" onClick={() => addToast(exampleToast)}>
        Send a toast
      </CButton>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

const Toasts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/toast/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Toasts are as flexible as you need and have very little required markup. At a minimum,
              we require a single element to contain your “toasted” content and strongly encourage a
              dismiss button.
            </p>
            <DocsExample href="components/toast">
              <CToast autohide={false} visible={true}>
                <CToastHeader closeButton>
                  <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>
                  <strong className="me-auto">CoreUI for React.js</strong>
                  <small>7 min ago</small>
                </CToastHeader>
                <CToastBody>Hello, world! This is a toast message.</CToastBody>
              </CToast>
            </DocsExample>
            <DocsExample href="components/toast">{ExampleToast()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Translucent</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Toasts are slightly translucent to blend in with what&#39;s below them.
            </p>
            <DocsExample href="components/toast#translucent" tabContentClassName="bg-dark">
              <CToast autohide={false} visible={true}>
                <CToastHeader closeButton>
                  <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>
                  <strong className="me-auto">CoreUI for React.js</strong>
                  <small>7 min ago</small>
                </CToastHeader>
                <CToastBody>Hello, world! This is a toast message.</CToastBody>
              </CToast>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Stacking</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can stack toasts by wrapping them in a toast container, which will vertically add
              some spacing.
            </p>
            <DocsExample href="components/toast#stacking">
              <CToaster className="position-static">
                <CToast autohide={false} visible={true}>
                  <CToastHeader closeButton>
                    <svg
                      className="rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="me-auto">CoreUI for React.js</strong>
                    <small>7 min ago</small>
                  </CToastHeader>
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                </CToast>
                <CToast autohide={false} visible={true}>
                  <CToastHeader closeButton>
                    <svg
                      className="rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="me-auto">CoreUI for React.js</strong>
                    <small>7 min ago</small>
                  </CToastHeader>
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                </CToast>
              </CToaster>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Custom content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Customize your toasts by removing sub-components, tweaking them with{' '}
              <a href="https://coreui.io/docs/utilities/api">utilities</a>, or by adding your own
              markup. Here we&#39;ve created a simpler toast by removing the default{' '}
              <code>&lt;CToastHeader&gt;</code>, adding a custom hide icon from{' '}
              <a href="https://coreui.io/icons/">CoreUI Icons</a>, and using some{' '}
              <a href="https://coreui.io/docs/utilities/flex">flexbox utilities</a> to adjust the
              layout.
            </p>
            <DocsExample href="components/toast#custom-content">
              <CToast autohide={false} className="align-items-center" visible={true}>
                <div className="d-flex">
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                  <CToastClose className="me-2 m-auto" />
                </div>
              </CToast>
            </DocsExample>
            <p className="text-body-secondary small">
              Alternatively, you can also add additional controls and components to toasts.
            </p>
            <DocsExample href="components/toast#custom-content">
              <CToast autohide={false} visible={true}>
                <CToastBody>
                  Hello, world! This is a toast message.
                  <div className="mt-2 pt-2 border-top">
                    <CButton type="button" color="primary" size="sm">
                      Take action
                    </CButton>
                    <CToastClose as={CButton} color="secondary" size="sm" className="ms-1">
                      Close
                    </CToastClose>
                  </div>
                </CToastBody>
              </CToast>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Custom content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Building on the above example, you can create different toast color schemes with our{' '}
              <a href="https://coreui.io/docs/utilities/colors">color</a> and{' '}
              <a href="https://coreui.io/docs/utilities/background">background</a> utilities. Here
              we&#39;ve set <code>color=&#34;primary&#34;</code> and added <code>.text-white</code>{' '}
              class to the <code>&lt;Ctoast&gt;</code>, and then set <code>white</code> property to
              our close button. For a crisp edge, we remove the default border with{' '}
              <code>.border-0</code>.
            </p>
            <DocsExample href="components/toast#color-schemes">
              <CToast
                autohide={false}
                color="primary"
                className="text-white align-items-center"
                visible={true}
              >
                <div className="d-flex">
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                  <CToastClose className="me-2 m-auto" white />
                </div>
              </CToast>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Toasts
