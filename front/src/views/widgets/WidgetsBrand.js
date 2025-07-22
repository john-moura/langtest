import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSpeech, cibReadme, cilHeadphones, cilColorBorder } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'
import { NavLink } from 'react-router-dom'
import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol lg={true}>
        <a href= 'reading' style={{textDecoration: 'none'}}>
        <CWidgetStatsD
          color="info"
          {...(props.withCharts && {
            //TODO: chart
          })}
          icon={<CIcon icon={cibReadme} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Score', value: '89%' },
            { title: 'Weight', value: '35%' },
          ]}
        />
        </a>
      </CCol>
      
      <CCol lg={true}>
        <CWidgetStatsD
          color="info"
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilHeadphones} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Score', value: '89%' },
            { title: 'Weight', value: '25%' },
          ]}
        />
      </CCol>
      <CCol lg={true}>
        <CWidgetStatsD
          color="info"
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [35, 23, 56, 22, 97, 23, 64],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilColorBorder} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Score', value: '89%' },
            { title: 'Weight', value: '15%' },
          ]}
        />
      </CCol>
      <CCol lg={true}>
        <CWidgetStatsD
          color="info"
          {...(props.withCharts && {
          })}
          icon={<CIcon icon={cilSpeech} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Score', value: '89%' },
            { title: 'Weight', value: '25%' },
          ]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand

