import { cilSpeech, cibReadme, cilHeadphones, cilColorBorder } from '@coreui/icons'

export const dashboardCards = [
  {
    name: 'Reading',
    to: '/reading',
    icon: cibReadme,
    values: [
      { title: 'Score', value: '89%' },
      { title: 'Weight', value: '35%' },
    ],
    color: "success",
  },
  {
    name: 'Listening',
    to: '/listening',
    icon: cilHeadphones,
    values: [
      { title: 'Score', value: '' },
      { title: 'Weight', value: '25%' },
    ],
    color: "info",
  },
  {
    name: 'Writing',
    to: '/writing',
    icon: cilColorBorder,
    values: [
      { title: 'Score', value: '64%' },
      { title: 'Weight', value: '15%' },
    ],
    color: "warning",
  },
  {
    name: 'Speaking',
    to: '/speaking',
    icon: cilSpeech,
    values: [
      { title: 'Score', value: '59%' },
      { title: 'Weight', value: '25%' },
    ],
    color: "danger",
  },
]
