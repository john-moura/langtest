import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cibReadme,
  cilFilterFrames,
  cilHeadphones,
  cilColorBorder,
  cilSpeech,
  cilGlobeAlt,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'LangTest',
    to: '/dashboard',
    icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Subjects',
  },
  {
    component: CNavItem,
    name: 'Reading and elements',
    to: '/reading',
    icon: <CIcon icon={cibReadme} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Listening comprehension',
    to: '/listening',
    icon: <CIcon icon={cilHeadphones} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Writing',
    to: '/writing',
    icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Speaking',
    to: '/speaking',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
  },
]

export default _nav
