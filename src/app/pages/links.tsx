import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import { SiDevpost } from 'react-icons/si'

export const links = [
  {
    index: 0,
    title: 'Find me on Github',
    href: 'https://github.com/ephraim888sun',
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: 'Find me on LinkedIn',
    href: 'https://www.linkedin.com/in/ephraim-sun',
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: 'Contact me via email',
    href: 'mailto:ephraim888sun@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: 'Find me on Devpost',
    href: 'https://devpost.com/ephraim888sun',
    icon: <SiDevpost />,
  },
]
